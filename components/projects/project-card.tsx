"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProjectInterface } from "@/config/projects";
import { useLocale } from "@/hooks/use-locale";
import { getProjectThumbnail } from "@/lib/utils";

interface ProjectCardProps {
  project: ProjectInterface;
  priority?: boolean;
  loading?: "eager" | "lazy";
}

export default function ProjectCard({
  project,
  priority = false,
  loading,
}: ProjectCardProps) {
  const { locale, t } = useLocale();
  const thumbnailSrc = getProjectThumbnail(project);

  const localizedDesc =
    locale === "vi"
      ? project.shortDescriptionVi || project.shortDescription
      : project.shortDescriptionEn || project.shortDescription;

  const typeLabel =
    project.type === "Personal" ? t.common.personal : t.common.professional;

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/70 bg-muted">
        <Image
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          src={thumbnailSrc}
          alt={project.companyName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={thumbnailSrc.startsWith("/api/og")}
          priority={priority}
          loading={priority ? "eager" : loading}
        />
        <span className="absolute left-3 top-3 rounded-full border border-border/60 bg-card/90 px-2.5 py-0.5 font-mono text-[11px] font-medium text-foreground backdrop-blur-sm">
          {typeLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {project.companyName}
        </h3>

        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {localizedDesc}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-band px-2 py-0.5 font-mono text-[11px] font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="rounded-md bg-band px-2 py-0.5 font-mono text-[11px] font-medium text-muted-foreground">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-3.5 text-xs font-semibold text-primary">
          <span>{t.common.readMore}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
