"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ExperienceInterface } from "@/config/experience";
import { useLocale } from "@/hooks/use-locale";

const getYearFromDate = (date: Date): string => {
  const d = new Date(date);
  return isNaN(d.getTime()) ? "" : d.getFullYear().toString();
};

interface ExperienceCardProps {
  experience: ExperienceInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { locale, t } = useLocale();

  const getDurationText = (
    startDate: Date,
    endDate: Date | "Present"
  ): string => {
    const startYear = getYearFromDate(startDate);
    const endYear =
      typeof endDate === "string" ? t.common.present : getYearFromDate(endDate);
    return startYear ? `${startYear} — ${endYear}` : endYear;
  };

  const localizedPosition =
    locale === "vi"
      ? experience.positionVi || experience.position
      : experience.position;

  const localizedDesc =
    locale === "vi"
      ? experience.descriptionVi?.[0] || experience.description[0]
      : experience.description[0];

  return (
    <Link
      href={`/experience/${experience.id}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover"
    >
      <div>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {experience.logo && (
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-1.5">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                {experience.company}
              </p>
              <p className="text-xs text-muted-foreground/80">
                {experience.location}
              </p>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center rounded-full bg-secondary px-2.5 py-1 font-mono text-[11px] font-semibold text-secondary-foreground tabular-nums">
            {getDurationText(experience.startDate, experience.endDate)}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {localizedPosition}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {localizedDesc}
        </p>
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {experience.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-band px-2 py-0.5 font-mono text-[11px] font-medium text-muted-foreground"
            >
              {skill}
            </span>
          ))}
          {experience.skills.length > 4 && (
            <span className="rounded-md bg-band px-2 py-0.5 font-mono text-[11px] font-medium text-muted-foreground">
              +{experience.skills.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border/70 pt-3.5 text-xs font-semibold text-primary">
          <span>{t.common.readMore}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
