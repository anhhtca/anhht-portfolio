"use client";

import { ArrowRight, PenLine } from "lucide-react";
import Link from "next/link";
import React from "react";

import { buttonVariants } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

export function BlogsEmptyState() {
  const { t } = useLocale();

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-20 text-center shadow-card">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
        <PenLine className="h-6 w-6" />
      </div>
      <h2 className="text-xl font-bold tracking-tight text-foreground">
        {t.pages.blogs.noPosts}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {t.pages.blogs.checkBack}
      </p>
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "mt-6 rounded-lg border-border font-semibold hover:border-primary/40 hover:text-primary"
        )}
      >
        <span>{t.common.allProjects}</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
