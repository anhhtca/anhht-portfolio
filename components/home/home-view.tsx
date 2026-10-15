"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { featuredProjects } from "@/config/projects";
import { featuredSkills } from "@/config/skills";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.png";
import { TechLinesBackground } from "@/components/home/tech-lines-background";

export default function HomeView() {
  const { t } = useLocale();

  return (
    <>
      <section className="relative w-full overflow-hidden min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 md:py-24 border-b border-border/40">
        <TechLinesBackground />

        <div className="container relative z-10 flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div className="relative mb-2 w-[55%] max-w-[15rem] transition-transform duration-300 hover:scale-105">
            <Image
              src={profileImg}
              height={100}
              width={100}
              sizes="100vw"
              className="rounded-full h-auto w-full object-cover border-[3.5px] border-white ring-2 ring-white/40 shadow-lg shadow-black/30"
              alt={`${t.site.authorName} - ${t.site.title}`}
              priority
            />
          </div>
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          >
            {t.site.authorName}
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-2xl text-slate-200 tracking-wide"
          >
            {t.site.title}
          </AnimatedText>
          <div className="mt-3 max-w-[42rem] text-center">
            <p className="leading-relaxed text-slate-400 text-sm sm:text-base">
              {t.site.tagline}
            </p>
          </div>

          <div className="flex flex-col mt-8 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"/resume"}
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-slate-950 hover:bg-slate-100 font-semibold shadow-lg shadow-white/10 transition-all hover:scale-105"
                )}
                aria-label="View resume"
              >
                <Icons.post className="w-4 h-4 mr-2" /> {t.common.resume}
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                rel="noreferrer"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "border-slate-700 bg-slate-900/60 backdrop-blur text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all hover:scale-105"
                )}
                aria-label="Contact"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> {t.common.contactMe}
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <a href="#projects" aria-label="Scroll to projects">
              <Icons.chevronDown className="h-6 w-6 text-slate-500 hover:text-slate-300 transition-colors animate-bounce mt-8 cursor-pointer" />
            </a>
          </AnimatedText>
        </div>
      </section>

      {/* Projects Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t.pages.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t.pages.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
            {featuredProjects.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full w-full min-w-0"
              >
                <ProjectCard project={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> {t.common.viewAll}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t.pages.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t.pages.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> {t.common.viewAll}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* Contributions Section (if any) */}
      {featuredContributions.length > 0 && (
        <AnimatedSection
          direction="up"
          className="container space-y-6 bg-muted py-10 my-14"
          id="contributions"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <AnimatedText
              as="h2"
              className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
            >
              Contributions
            </AnimatedText>
          </div>
          <ContributionCard contributions={featuredContributions} />
          <AnimatedText delay={0.4} className="flex justify-center">
            <Link href="/contributions">
              <Button variant={"outline"} className="rounded-xl">
                <Icons.chevronDown className="mr-2 h-4 w-4" /> {t.common.viewAll}
              </Button>
            </Link>
          </AnimatedText>
        </AnimatedSection>
      )}

      {/* Skills Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
          >
            {t.pages.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {t.pages.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> {t.common.viewAll}
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </>
  );
}
