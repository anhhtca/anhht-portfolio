"use client";

import { ArrowRight, ChevronDown, FileText, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { featuredProjects, Projects } from "@/config/projects";
import { featuredSkills } from "@/config/skills";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.png";

export default function HomeView() {
  const { t } = useLocale();

  return (
    <>
      {/* Hero Section */}
      <section className="hero-luminous relative w-full overflow-hidden border-b border-border/80">
        <div
          aria-hidden="true"
          className="hero-dots pointer-events-none absolute inset-0"
        />

        <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center py-20 text-center md:py-28">
          <div className="relative mb-6">
            <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary via-sky-500 to-blue-600 p-[3px] shadow-card transition-transform duration-300 hover:scale-[1.03] sm:h-36 sm:w-36">
              <div className="h-full w-full overflow-hidden rounded-full bg-card">
                <Image
                  src={profileImg}
                  height={160}
                  width={160}
                  sizes="144px"
                  className="h-full w-full object-cover"
                  alt={`${t.site.authorName} - ${t.site.title}`}
                  priority
                />
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute bottom-1.5 right-1.5 h-4 w-4 rounded-full border-2 border-card bg-emerald-500"
            />
          </div>

          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-secondary px-3.5 py-1 text-xs font-medium text-secondary-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>{t.site.location}</span>
          </div>

          <AnimatedText
            as="h1"
            delay={0.08}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl text-balance"
          >
            {t.site.authorName}
          </AnimatedText>

          <AnimatedText
            as="p"
            delay={0.16}
            className="mt-3 text-lg font-semibold tracking-tight text-primary sm:text-xl md:text-2xl"
          >
            {t.site.title}
          </AnimatedText>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.site.tagline}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/resume"
              target="_blank"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto rounded-lg px-6 font-semibold shadow-sm"
              )}
              aria-label="View resume"
            >
              <FileText className="mr-2 h-4 w-4" />
              {t.common.resume}
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto rounded-lg border-border bg-card px-6 font-semibold text-foreground shadow-card hover:bg-muted/70"
              )}
              aria-label="Contact"
            >
              <Mail className="mr-2 h-4 w-4" />
              {t.common.contactMe}
            </Link>
          </div>

          <a
            href="#projects"
            aria-label="Scroll to projects"
            className="mt-14 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/80 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ChevronDown className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <AnimatedSection
        direction="up"
        className="w-full border-b border-border/80 bg-band py-16 md:py-24"
        id="projects"
      >
        <div className="container space-y-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              {t.pages.projects.title}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.pages.projects.description}
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                priority={index < 3}
                loading={index < 3 ? "eager" : "lazy"}
              />
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <Link
              href="/projects"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "rounded-lg border-border bg-card px-5 font-semibold text-foreground shadow-card hover:border-primary/40 hover:text-primary"
              )}
            >
              <span>
                {t.common.viewAll} ({Projects.length})
              </span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection
        direction="up"
        className="w-full border-b border-border/80 bg-background py-16 md:py-24"
        id="experience"
      >
        <div className="container space-y-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              {t.pages.experience.title}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.pages.experience.description}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {experiences.slice(0, 2).map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <Link
              href="/experience"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "rounded-lg border-border bg-card px-5 font-semibold text-foreground shadow-card hover:border-primary/40 hover:text-primary"
              )}
            >
              <span>{t.common.viewAll}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Contributions Section (if any) */}
      {featuredContributions.length > 0 && (
        <AnimatedSection
          direction="up"
          className="w-full border-b border-border/80 bg-band py-16 md:py-24"
          id="contributions"
        >
          <div className="container space-y-10">
            <div className="mx-auto max-w-2xl space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Contributions
              </h2>
            </div>
            <ContributionCard contributions={featuredContributions} />
            <div className="flex justify-center pt-2">
              <Link
                href="/contributions"
                className={cn(
                  buttonVariants({ variant: "outline", size: "default" }),
                  "rounded-lg border-border bg-card px-5 font-semibold text-foreground shadow-card hover:border-primary/40 hover:text-primary"
                )}
              >
                <span>{t.common.viewAll}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Skills Section */}
      <AnimatedSection
        direction="up"
        className="w-full bg-band py-16 md:py-24"
        id="skills"
      >
        <div className="container space-y-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              {t.pages.skills.title}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.pages.skills.description}
            </p>
          </div>

          <SkillsCard skills={featuredSkills} />

          <div className="flex justify-center pt-2">
            <Link
              href="/skills"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "rounded-lg border-border bg-card px-5 font-semibold text-foreground shadow-card hover:border-primary/40 hover:text-primary"
              )}
            >
              <span>{t.common.viewAll}</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
