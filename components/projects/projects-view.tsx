"use client";

import React from "react";
import ProjectCard from "@/components/projects/project-card";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { Projects } from "@/config/projects";
import { useLocale } from "@/hooks/use-locale";

const renderContent = (tabVal: string) => {
  let projectArr = Projects;
  if (tabVal === "personal") {
    projectArr = projectArr.filter((val) => val.type === "Personal");
  } else if (tabVal === "professional") {
    projectArr = projectArr.filter((val) => val.type === "Professional");
  }

  return (
    <div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static items-stretch">
      {projectArr.map((project, index) => (
        <ProjectCard
          project={project}
          key={project.id}
          priority={index < 3}
          loading={index < 3 ? "eager" : "lazy"}
        />
      ))}
    </div>
  );
};

export default function ProjectsView() {
  const { t } = useLocale();

  const tabItems = [
    {
      value: "all",
      label: t.common.all,
      content: renderContent("all"),
    },
    {
      value: "personal",
      label: t.common.personal,
      content: renderContent("personal"),
    },
    {
      value: "professional",
      label: t.common.professional,
      content: renderContent("professional"),
    },
  ];

  return <ResponsiveTabs items={tabItems} defaultValue="all" />;
}
