import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { NextRequest, NextResponse } from "next/server";

import { ProjectInterface, Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ==========================================
// In-Memory Cache for Blazing Fast Responses
// ==========================================
type CacheValue =
  | { type: "redirect"; url: string; expiresAt: number }
  | { type: "image"; buffer: Buffer; contentType: string; expiresAt: number }
  | { type: "failed_web_og"; expiresAt: number };

const ogCache = new Map<string, CacheValue>();

const BOT_USER_AGENT =
  "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)";

// ==========================================
// 1) Find Image in Public Folder
// ==========================================
function findImageInPublic(
  projectId: string,
  project?: ProjectInterface
): string | null {
  const publicDir = path.join(process.cwd(), "public");

  // 1.1 If project.thumbnail in source is a local public path (starts with /)
  if (
    project?.thumbnail &&
    project.thumbnail.trim() !== "" &&
    project.thumbnail.startsWith("/") &&
    !project.thumbnail.startsWith("/api/")
  ) {
    const fullPath = path.join(publicDir, project.thumbnail.replace(/^\//, ""));
    if (fs.existsSync(fullPath)) {
      return project.thumbnail;
    }
  }

  // 1.2 Convention-based file checks in public/projects/${projectId}/
  const extensions = [".png", ".jpg", ".jpeg", ".webp", ".svg"];
  const filenames = [
    "thumbnail",
    "cover",
    "og",
    "preview",
    "hero",
    "web_1",
    "landing_1",
  ];

  for (const name of filenames) {
    for (const ext of extensions) {
      const relPath = `/projects/${projectId}/${name}${ext}`;
      if (fs.existsSync(path.join(publicDir, "projects", projectId, `${name}${ext}`))) {
        return relPath;
      }
    }
  }

  // 1.3 Check public/projects/${projectId}.(ext)
  for (const ext of extensions) {
    const relPath = `/projects/${projectId}${ext}`;
    if (fs.existsSync(path.join(publicDir, "projects", `${projectId}${ext}`))) {
      return relPath;
    }
  }

  // 1.4 Check direct public/${projectId}.(ext)
  for (const ext of extensions) {
    const relPath = `/${projectId}${ext}`;
    if (fs.existsSync(path.join(publicDir, `${projectId}${ext}`))) {
      return relPath;
    }
  }

  // 1.5 Check pagesInfoArr first image if it points to an existing public file
  if (project?.pagesInfoArr?.[0]?.imgArr?.[0]) {
    const firstImg = project.pagesInfoArr[0].imgArr[0];
    if (firstImg.startsWith("/") && !firstImg.startsWith("/api/")) {
      const fullPath = path.join(publicDir, firstImg.replace(/^\//, ""));
      if (fs.existsSync(fullPath)) {
        return firstImg;
      }
    }
  }

  return null;
}

// ==========================================
// 2) Find URL Thumbnail Specified in Source
// ==========================================
function findThumbnailInSource(project?: ProjectInterface): string | null {
  if (!project) return null;

  // Check explicit thumbnail URL in source
  if (project.thumbnail && project.thumbnail.trim() !== "") {
    if (
      project.thumbnail.startsWith("http://") ||
      project.thumbnail.startsWith("https://")
    ) {
      return project.thumbnail;
    }
  }

  return null;
}

// ==========================================
// 3) Scrape Directly from Website (Web OG)
// ==========================================
function extractOgImage(html: string, baseUrl: URL): string | null {
  const cleanHtml = html.replace(/<!--[\s\S]*?-->/g, "");

  const patterns = [
    /<meta[^>]+property=["']og:image:secure_url["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image:secure_url["']/i,
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i,
    /["']og:image["']\s*,\s*["']content["']\s*:\s*["']([^"']+)["']/i,
    /["']twitter:image["']\s*,\s*["']content["']\s*:\s*["']([^"']+)["']/i,
    /<img[^>]+src=["']([^"']+\.(?:png|jpg|jpeg|webp))["'][^>]+alt=["'][^"']*(?:hero-image|preview|banner|thumbnail)[^"']*["']/i,
    /<img[^>]+alt=["'][^"']*(?:hero-image|preview|banner|thumbnail)[^"']*["'][^>]+src=["']([^"']+\.(?:png|jpg|jpeg|webp))["']/i,
    /<img[^>]+src=["']([^"']*(?:hero|banner|preview)[^"']*\.(?:png|jpg|jpeg|webp))["']/i,
  ];

  for (const pattern of patterns) {
    const match = cleanHtml.match(pattern);
    if (match?.[1]) {
      const rawUrl = match[1].trim();
      try {
        return new URL(rawUrl, baseUrl).toString();
      } catch {
        // Continue searching
      }
    }
  }

  return null;
}

async function fetchWebsiteOgImage(websiteLink: string): Promise<string | null> {
  let parsedTarget: URL;
  try {
    parsedTarget = new URL(websiteLink);
    if (
      parsedTarget.protocol !== "http:" &&
      parsedTarget.protocol !== "https:"
    ) {
      return null;
    }
  } catch {
    return null;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(parsedTarget.toString(), {
      headers: {
        "User-Agent": BOT_USER_AGENT,
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      signal: controller.signal,
      next: { revalidate: 86400 },
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const html = await res.text();
      return extractOgImage(html, parsedTarget);
    }
  } catch (err) {
    // Website unreachable, timed out, or blocked
  }

  return null;
}

// ==========================================
// 4) Generate Dynamic OG Card
// ==========================================
function renderProjectOgResponse(
  project: ProjectInterface | undefined,
  lang: string
) {
  const interBoldPath = path.join(
    process.cwd(),
    "assets",
    "fonts",
    "Inter-Bold.ttf"
  );
  const interRegularPath = path.join(
    process.cwd(),
    "assets",
    "fonts",
    "Inter-Regular.ttf"
  );

  const interBold = fs.readFileSync(interBoldPath);
  const interRegular = fs.readFileSync(interRegularPath);

  let logoBase64 = "";
  try {
    const logoBuffer = fs.readFileSync(
      path.join(process.cwd(), "public", "logo.png")
    );
    logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;
  } catch {
    // Ignore fallback
  }

  const title = project?.companyName || "Project Showcase";
  const description =
    lang === "en"
      ? project?.shortDescriptionEn || project?.shortDescription || ""
      : project?.shortDescriptionVi || project?.shortDescription || "";

  const typeLabel =
    project?.type === "Personal"
      ? lang === "vi"
        ? "Dự án Cá nhân"
        : "Personal Project"
      : lang === "vi"
        ? "Dự án Doanh nghiệp"
        : "Professional Work";

  const categories = project?.category ? project.category.slice(0, 3) : [];
  const techStack = project?.techStack ? project.techStack.slice(0, 6) : [];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.15), transparent 45%), radial-gradient(circle at 15% 85%, rgba(168, 85, 247, 0.12), transparent 45%)",
          color: "#f8fafc",
          fontFamily: "Inter, sans-serif",
          padding: "54px 64px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Subtle decorative inner border */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: 24,
            pointerEvents: "none",
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {logoBase64 && (
              <img
                src={logoBase64}
                alt="Logo"
                width={46}
                height={46}
                style={{
                  borderRadius: 12,
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              />
            )}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#f8fafc",
                  letterSpacing: "-0.02em",
                }}
              >
                {siteConfig.authorName}
              </span>
              <span
                style={{
                  fontSize: 14,
                  color: "#94a3b8",
                }}
              >
                anhht.me / projects
              </span>
            </div>
          </div>

          {/* Project Type Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: 9999,
              fontSize: 15,
              fontWeight: 600,
              backgroundColor:
                project?.type === "Personal"
                  ? "rgba(16, 185, 129, 0.15)"
                  : "rgba(59, 130, 246, 0.15)",
              color:
                project?.type === "Personal" ? "#34d399" : "#60a5fa",
              border:
                project?.type === "Personal"
                  ? "1px solid rgba(16, 185, 129, 0.3)"
                  : "1px solid rgba(59, 130, 246, 0.3)",
            }}
          >
            {typeLabel}
          </div>
        </div>

        {/* Middle Section: Title, Categories, Description */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: "1000px",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {/* Category pills */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <div
                key={cat}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  color: "#cbd5e1",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Project Title */}
          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            {title}
          </div>

          {/* Short Description */}
          <div
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: "#94a3b8",
              lineHeight: 1.45,
              maxHeight: 100,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </div>
        </div>

        {/* Bottom Footer Row: Tech Stack */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: 18,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#64748b",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginRight: 6,
              }}
            >
              Stack:
            </span>
            {techStack.map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  color: "#93c5fd",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: 14,
              color: "#64748b",
              fontWeight: 500,
            }}
          >
            {project?.websiteLink?.replace(/^https?:\/\//, "").replace(/\/$/, "") ||
              "github.com/anhhtz"}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "Inter",
          data: interRegular,
          weight: 400,
          style: "normal",
        },
      ],
      headers: {
        "Cache-Control":
          "public, max-age=86400, stale-while-revalidate=604800",
      },
    }
  );
}

// ==========================================
// Main Request Handler
// ==========================================
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const lang = searchParams.get("lang") || "vi";

    if (!id) {
      return NextResponse.redirect(new URL("/logo.png", req.url), {
        status: 307,
      });
    }

    const cacheKey = `${id}:${lang}`;
    const cached = ogCache.get(cacheKey);

    // Serve from in-memory cache if available and not expired
    if (cached && Date.now() < cached.expiresAt) {
      if (cached.type === "redirect") {
        return NextResponse.redirect(new URL(cached.url, req.url), {
          status: 307,
          headers: {
            "Cache-Control":
              "public, max-age=86400, stale-while-revalidate=604800",
          },
        });
      }
      if (cached.type === "image") {
        return new Response(new Uint8Array(cached.buffer), {
          status: 200,
          headers: {
            "Content-Type": cached.contentType,
            "Cache-Control":
              "public, max-age=86400, stale-while-revalidate=604800",
          },
        });
      }
    }

    const project = Projects.find((p) => p.id === id);

    // ----------------------------------------------------
    // Priority 1: Lấy ảnh trong public folder
    // ----------------------------------------------------
    const publicImage = findImageInPublic(id, project);
    if (publicImage) {
      ogCache.set(cacheKey, {
        type: "redirect",
        url: publicImage,
        expiresAt: Date.now() + 86400_000,
      });
      return NextResponse.redirect(new URL(publicImage, req.url), {
        status: 307,
        headers: {
          "Cache-Control":
            "public, max-age=86400, stale-while-revalidate=604800",
        },
      });
    }

    // ----------------------------------------------------
    // Priority 2: Lấy URL thumbnail chỉ định trong source
    // ----------------------------------------------------
    const sourceThumbnail = findThumbnailInSource(project);
    if (sourceThumbnail) {
      ogCache.set(cacheKey, {
        type: "redirect",
        url: sourceThumbnail,
        expiresAt: Date.now() + 86400_000,
      });
      return NextResponse.redirect(new URL(sourceThumbnail, req.url), {
        status: 307,
        headers: {
          "Cache-Control":
            "public, max-age=86400, stale-while-revalidate=604800",
        },
      });
    }

    // ----------------------------------------------------
    // Priority 3: Lấy ảnh trực tiếp trên website (Web OG)
    // ----------------------------------------------------
    const wasWebOgFailed =
      cached?.type === "failed_web_og" && Date.now() < cached.expiresAt;

    if (
      !wasWebOgFailed &&
      project?.websiteLink &&
      project.websiteLink.startsWith("http")
    ) {
      const webOgUrl = await fetchWebsiteOgImage(project.websiteLink);
      if (webOgUrl) {
        ogCache.set(cacheKey, {
          type: "redirect",
          url: webOgUrl,
          expiresAt: Date.now() + 86400_000,
        });
        return NextResponse.redirect(new URL(webOgUrl, req.url), {
          status: 307,
          headers: {
            "Cache-Control":
              "public, max-age=86400, stale-while-revalidate=604800",
          },
        });
      } else {
        // Cache failure so we skip repeated 3.5s blocking requests
        ogCache.set(cacheKey, {
          type: "failed_web_og",
          expiresAt: Date.now() + 6 * 3600_000, // 6 hours
        });
      }
    }

    // ----------------------------------------------------
    // Priority 4: Generate OG dynamic image
    // ----------------------------------------------------
    const imageResponse = renderProjectOgResponse(project, lang);
    const arrayBuffer = await imageResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    ogCache.set(cacheKey, {
      type: "image",
      buffer,
      contentType: "image/png",
      expiresAt: Date.now() + 7 * 86400_000, // 7 days
    });

    return new Response(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control":
          "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    console.error("Failed to resolve project OG:", error);
    return NextResponse.redirect(new URL("/logo.png", req.url), {
      status: 307,
    });
  }
}
