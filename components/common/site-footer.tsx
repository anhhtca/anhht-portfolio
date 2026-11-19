"use client";

import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { SocialLinks } from "@/config/socials";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t border-border bg-card/80 text-muted-foreground",
        className
      )}
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center gap-2.5 text-sm">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-medium text-foreground">Hoàng Tuấn Anh</span>
          <span className="text-border">·</span>
          <span className="font-mono text-xs tabular-nums">
            © {year} anhht.me
          </span>
        </div>

        <nav
          aria-label="Footer"
          className="flex items-center gap-5 text-xs font-medium"
        >
          <Link
            href="/projects"
            className="transition-colors hover:text-foreground"
          >
            {t.nav.projects}
          </Link>
          <Link
            href="/blogs"
            className="transition-colors hover:text-foreground"
          >
            {t.nav.blogs}
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground"
          >
            {t.nav.contact}
          </Link>
          <Link
            href="/resume"
            target="_blank"
            className="transition-colors hover:text-foreground"
          >
            {t.nav.resume}
          </Link>
        </nav>

        <div className="flex items-center gap-1.5">
          {SocialLinks.map((item, ind) => (
            <CustomTooltip icon={item.icon} text={item.username} key={ind}>
              <Link
                href={item.link}
                target="_blank"
                rel="noreferrer"
                aria-label={item.name}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  }),
                  "h-9 w-9 rounded-full p-0 text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
              </Link>
            </CustomTooltip>
          ))}
        </div>
      </div>
    </footer>
  );
}
