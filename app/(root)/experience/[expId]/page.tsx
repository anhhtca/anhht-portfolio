import { Metadata } from "next";
import { redirect } from "next/navigation";

import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import ExperienceDetailView from "@/components/experience/experience-detail-view";
import { experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";

interface ExperienceDetailPageProps {
  params: Promise<{
    expId: string;
  }>;
}

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { expId } = await params;
  const experience = experiences.find((c) => c.id === expId);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: `${experience.position} at ${experience.company} | Experience`,
    description: `Detailed information about my role as ${experience.position} at ${experience.company}.`,
    alternates: {
      canonical: `${siteConfig.url}/experience/${expId}`,
    },
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { expId } = await params;
  const experience = experiences.find((c) => c.id === expId);

  if (!experience) {
    redirect("/experience");
  }

  return (
    <ClientPageWrapper>
      <ExperienceDetailView experience={experience} />
    </ClientPageWrapper>
  );
}
