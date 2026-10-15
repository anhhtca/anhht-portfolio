import Link from "next/link";
import * as React from "react";

import { useLockBody } from "@/hooks/use-lock-body";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();
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
      className={cn(
        "fixed inset-0 top-12 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-top-10 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            anhht
          </span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {getNavTitle(item.href, item.title)}
            </Link>
          ))}
        </nav>
        {children ? <div className="pt-2">{children}</div> : null}
      </div>
    </div>
  );
}
