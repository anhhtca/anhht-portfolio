"use client";

import { ArrowUpRight, Github, Mail } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

export default function GithubRedirectCard() {
  const { t } = useLocale();

  return (
    <Card className="h-fit w-full max-w-md rounded-2xl border-border bg-card shadow-card">
      <CardContent className="p-7 space-y-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
          <Github className="h-6 w-6" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            {t.pages.contact.githubCardTitle}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t.pages.contact.githubCardDesc}
          </p>
        </div>

        <div className="space-y-2.5 pt-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full justify-between rounded-lg font-semibold"
            )}
          >
            <span className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <span>GitHub (@{siteConfig.username})</span>
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          <Link
            href="mailto:anhht.ca@gmail.com"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full justify-between rounded-lg border-border font-semibold"
            )}
          >
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>anhht.ca@gmail.com</span>
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
