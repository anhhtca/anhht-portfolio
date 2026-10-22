import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import Script from "next/script";

import { Icons } from "@/components/common/icons";
import ProjectBackButton from "@/components/projects/project-back-button";
import ProjectDescription from "@/components/projects/project-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj, getProjectThumbnail } from "@/lib/utils";
import profileImg from "@/public/profile-img.png";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export async function generateStaticParams() {
  return Projects.map((project) => ({
    projectId: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = Projects.find((val) => val.id === projectId);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = `${project.companyName} | Projects`;
  const description =
    project.shortDescriptionEn || project.shortDescription || "";
  const ogImage = `${siteConfig.url}/api/og/project?id=${project.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.url}/projects/${projectId}`,
    },
    openGraph: {
      title: `${project.companyName} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}/projects/${projectId}`,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.companyName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.companyName} | ${siteConfig.name}`,
      description,
      images: [ogImage],
      creator: `@${siteConfig.username}`,
    },
  };
}

export default async function Project({ params }: ProjectPageProps) {
  const { projectId } = await params;
  let project = Projects.find((val) => val.id === projectId);
  if (!project) {
    redirect("/projects");
  }

  const thumbnailSrc = getProjectThumbnail(project);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.companyName,
    description: project.shortDescription,
    applicationCategory: project.category.join(", "),
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
    ...(project.websiteLink && { url: project.websiteLink }),
    image: `${siteConfig.url}/api/og/project?id=${project.id}`,
  };

  return (
    <>
      <Script
        id={`schema-project-${project.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <article className="container relative max-w-3xl py-6 lg:py-10">
        <ProjectBackButton />
      <div>
        {formatDateFromObj(project.startDate) && (
          <time
            dateTime={Date.now().toString()}
            className="block text-sm text-muted-foreground"
          >
            {formatDateFromObj(project.startDate)}
          </time>
        )}
        <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {project.companyName}
          <div className="flex items-center">
            {project.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={project.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Please note that some project links may be temporarily unavailable.">
                <Link href={project.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>
        <ChipContainer textArr={project.category} />
        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={profileImg}
              alt={siteConfig.authorName}
              width={42}
              height={42}
              className="rounded-full bg-background"
            />

            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">{siteConfig.authorName}</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="relative w-full aspect-video my-8 rounded-md border bg-muted overflow-hidden">
        <Image
          src={thumbnailSrc}
          alt={project.companyName}
          fill
          className="object-cover transition-colors"
          priority
          loading="eager"
          unoptimized={thumbnailSrc.startsWith("/api/og")}
        />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Tech Stack
        </h2>
        <ChipContainer textArr={project.techStack} />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
          Description
        </h2>
        {/* {<project.descriptionComponent />} */}
        <ProjectDescription
          paragraphs={project.descriptionDetails.paragraphs}
          bullets={project.descriptionDetails.bullets}
        />
      </div>

      <div className="mb-7 ">
        <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">
          Page Info
        </h2>
        {project.pagesInfoArr.map((page, ind) => (
          <div key={ind}>
            <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3">
              <Icons.star className="h-5 w-5 mr-2" /> {page.title}
            </h3>
            <div>
              <p>{page.description}</p>
              {page.imgArr.map((img, ind) => (
                <Image
                  src={img}
                  key={ind}
                  alt={img}
                  width={720}
                  height={405}
                  className="my-4 rounded-md border bg-muted transition-colors"
                  priority
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </Link>
      </div>
      </article>
    </>
  );
}
