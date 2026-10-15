import { NextRequest, NextResponse } from "next/server";

export const revalidate = 86400; // Cache response on edge for 24 hours

const BOT_USER_AGENT =
  "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)";

function extractOgImage(html: string, baseUrl: URL): string | null {
  // Strip HTML comments so commented out meta tags are not matched
  const cleanHtml = html.replace(/<!--[\s\S]*?-->/g, "");

  // Common patterns for OpenGraph and Twitter card image tags
  const patterns = [
    /<meta[^>]+property=["']og:image:secure_url["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image:secure_url["']/i,
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["']/i,
    // JSON-like RSC chunk matches if site is Next.js app router
    /["']og:image["']\s*,\s*["']content["']\s*:\s*["']([^"']+)["']/i,
    /["']twitter:image["']\s*,\s*["']content["']\s*:\s*["']([^"']+)["']/i,
    // Hero, preview, or banner images when og:image is omitted
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
        // Continue searching if URL resolution fails
      }
    }
  }

  return null;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get("url");

  const fallbackUrl = new URL("/logo.png", req.url);

  if (!targetUrl) {
    return NextResponse.redirect(fallbackUrl, { status: 307 });
  }

  let parsedTarget: URL;
  try {
    parsedTarget = new URL(targetUrl);
    if (
      parsedTarget.protocol !== "http:" &&
      parsedTarget.protocol !== "https:"
    ) {
      return NextResponse.redirect(fallbackUrl, { status: 307 });
    }
  } catch {
    return NextResponse.redirect(fallbackUrl, { status: 307 });
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

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
      const ogImage = extractOgImage(html, parsedTarget);

      if (ogImage) {
        return NextResponse.redirect(new URL(ogImage), {
          status: 307,
          headers: {
            "Cache-Control":
              "public, max-age=86400, stale-while-revalidate=604800",
          },
        });
      }
    }
  } catch (err) {
    // Fall back to default logo on timeout, network failure or parsing error
    console.error(`OG fetch failed for ${targetUrl}:`, err);
  }

  return NextResponse.redirect(fallbackUrl, {
    status: 307,
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
