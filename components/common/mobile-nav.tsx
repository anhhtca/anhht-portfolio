"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { useLockBody } from "@/hooks/use-lock-body";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: { title: string; href: string; disabled?: boolean }[];
  onClose?: () => void;
  children?: React.ReactNode;
}

export function MobileNav({ items, onClose, children }: MobileNavProps) {
  useLockBody();
  const pathname = usePathname();
  const { t } = useLocale();

  const getNavTitle = (href: string, fallback: string) => {
    if (href === "/projects") return t.nav.projects;
    if (href === "/experience") return t.nav.experience;
    if (href === "/skills") return t.nav.skills;
    if (href === "/blogs") return t.nav.blogs;
    if (href === "/contact") return t.nav.contact;
    if (href === "/resume") return t.nav.resume;
    return fallback;
  };

  return (
    <div
      className="fixed inset-0 top-16 z-50 bg-background/80 backdrop-blur-sm p-4 md:hidden"
      onClick={onClose}
    >
      <div
        className="relative z-20 mx-auto max-w-md rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="grid gap-1 text-sm">
          {items.map((item) => {
            const isActive = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.disabled ? "#" : item.href}
                onClick={onClose}
                className={cn(
                  "flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {getNavTitle(item.href, item.title)}
              </Link>
            );
          })}
        </nav>
        {children ? (
          <div className="mt-4 border-t border-border pt-4">{children}</div>
        ) : null}
      </div>
    </div>
  );
}
