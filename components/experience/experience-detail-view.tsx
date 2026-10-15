"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChipContainer from "@/components/ui/chip-container";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { ExperienceInterface } from "@/config/experience";
import { useLocale } from "@/hooks/use-locale";

interface ExperienceDetailViewProps {
  experience: ExperienceInterface;
}

const getYearFromDate = (date: Date): string => {
  const d = new Date(date);
  return isNaN(d.getTime()) ? "" : d.getFullYear().toString();
};

export default function ExperienceDetailView({
  experience,
}: ExperienceDetailViewProps) {
  const { locale, t } = useLocale();

  const getDurationText = (
    startDate: Date,
    endDate: Date | "Present"
  ): string => {
    const startYear = getYearFromDate(startDate);
    const endYear =
      typeof endDate === "string" ? t.common.present : getYearFromDate(endDate);
    return startYear ? `${startYear} - ${endYear}` : endYear;
  };

  const localizedPosition =
    locale === "vi"
      ? experience.positionVi || experience.position
      : experience.position;

  const localizedDescription =
    locale === "vi" && experience.descriptionVi
      ? experience.descriptionVi
      : experience.description;

  const localizedAchievements =
    locale === "vi" && experience.achievementsVi
      ? experience.achievementsVi
      : experience.achievements;

  const tabItems = [
    {
      value: "summary",
      label: locale === "vi" ? "Tóm tắt" : "Summary",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              {locale === "vi" ? "Tóm tắt vai trò" : "Role Summary"}
            </h3>
            <ul className="space-y-3">
              {localizedDescription.map((desc, idx) => (
                <li
                  key={idx}
                  className="text-base leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "achievements",
      label: locale === "vi" ? "Thành tựu" : "Achievements",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              {locale === "vi" ? "Thành tựu chính" : "Key Achievements"}
            </h3>
            <ul className="space-y-3">
              {localizedAchievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-base leading-relaxed flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "skills",
      label: locale === "vi" ? "Kỹ năng" : "Skills",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              {locale === "vi" ? "Công nghệ & Kỹ năng" : "Technologies & Skills"}
            </h3>
            <ChipContainer textArr={experience.skills} />
            <p className="mt-4 text-sm text-muted-foreground">
              {locale === "vi"
                ? `Các công nghệ và kỹ năng chính được ứng dụng trong quá trình làm việc tại ${experience.company}.`
                : `These are the primary technologies and skills utilized during my time at ${experience.company}.`}
            </p>
          </div>
        </AnimatedSection>
      ),
    },
  ];

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <AnimatedSection className="mb-6">
        <Button variant="ghost" size="sm" className="mb-4" asChild>
          <Link href="/experience">
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            {locale === "vi" ? "Quay lại Kinh nghiệm" : "Back to Experience"}
          </Link>
        </Button>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Card className="overflow-hidden rounded-lg border bg-background p-2 transition-all duration-300">
          <CardHeader className="pb-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  {experience.logo && (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  )}
                  <div className="flex-1 text-center sm:text-left">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                      {localizedPosition}
                    </h1>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                      <span className="text-md font-medium text-muted-foreground">
                        {experience.company}
                      </span>
                      {experience.companyUrl && (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Icons.externalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {experience.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                    <Icons.calendar className="w-4 h-4 mr-2" />
                    {getDurationText(experience.startDate, experience.endDate)}
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <ResponsiveTabs items={tabItems} defaultValue="summary" />
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}
