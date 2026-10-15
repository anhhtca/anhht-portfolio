import { Metadata } from "next";
import Script from "next/script";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import HomeView from "@/components/home/home-view";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: siteConfig.title,
    sameAs: [siteConfig.links.github, siteConfig.links.twitter].filter(Boolean),
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HomeView />
    </ClientPageWrapper>
  );
}
