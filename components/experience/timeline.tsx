"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { ExperienceInterface } from "@/config/experience";
import { useLocale } from "@/hooks/use-locale";

const getYearFromDate = (date: Date): string => {
  const d = new Date(date);
  return isNaN(d.getTime()) ? "" : d.getFullYear().toString();
};

interface TimelineProps {
  experiences: ExperienceInterface[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
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

  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="space-y-5">
      {sortedExperiences.map((experience, index) => {
        const localizedPosition =
          locale === "vi"
            ? experience.positionVi || experience.position
            : experience.position;
        const localizedDesc =
          locale === "vi"
            ? experience.descriptionVi?.[0] || experience.description[0]
            : experience.description[0];

        return (
          <AnimatedSection
            key={experience.id}
            delay={0.08 * (index + 1)}
            direction="up"
          >
            <Link
              href={`/experience/${experience.id}`}
              className="group block w-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card-hover"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  {experience.logo && (
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background p-2">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
                        {localizedPosition}
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 font-mono text-xs font-semibold text-secondary-foreground tabular-nums">
                        {getDurationText(
                          experience.startDate,
                          experience.endDate
                        )}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {experience.company} · {experience.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {localizedDesc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-band px-2 py-0.5 font-mono text-[11px] font-medium text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-primary sm:self-center">
                  <span>{t.common.readMore}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </AnimatedSection>
        );
      })}
    </div>
  );
};

export default Timeline;
