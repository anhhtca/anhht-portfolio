import { Metadata } from "next";
import Script from "next/script";

import PageContainer from "@/components/common/page-container";
import ProjectsView from "@/components/projects/projects-view";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: `${pagesConfig.projects.metadata.title} | ${siteConfig.name}`,
    description: pagesConfig.projects.metadata.description,
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.authorName} Projects`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pagesConfig.projects.metadata.title} | ${siteConfig.name}`,
    description: pagesConfig.projects.metadata.description,
    images: [siteConfig.ogImage],
    creator: `@${siteConfig.username}`,
  },
};

export default function ProjectsPage() {
  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${siteConfig.authorName} — Projects`,
    description: pagesConfig.projects.metadata.description,
    url: `${siteConfig.url}/projects`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: Projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: project.companyName,
          description: project.shortDescription,
          url: `${siteConfig.url}/projects/${project.id}`,
          image: `${siteConfig.url}/api/og/project?id=${project.id}`,
        },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteConfig.url}/projects`,
      },
    ],
  };

  return (
    <>
      <Script
        id="schema-project-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }}
      />
      <Script
        id="schema-breadcrumb-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageContainer
        pageKey="projects"
        title={pagesConfig.projects.title}
        description={pagesConfig.projects.description}
      >
        <ProjectsView />
      </PageContainer>
    </>
  );
}
