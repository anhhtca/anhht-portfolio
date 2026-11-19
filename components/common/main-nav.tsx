"use client";

import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();
  const { t } = useLocale();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

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
    <div className="flex items-center gap-6 md:gap-8">
      <Link
        href="/"
        className="hidden items-center gap-2.5 md:flex group"
        aria-label="anhht home"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-primary transition-transform duration-200 group-hover:scale-110" />
        <span className="text-base font-bold tracking-tight text-foreground">
          anhht
        </span>
      </Link>

      {items?.length ? (
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {items.map((item) => {
            const isActive = segment ? item.href.startsWith(`/${segment}`) : false;
            return (
              <Link
                key={item.href}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
              >
                {getNavTitle(item.href, item.title)}
              </Link>
            );
          })}
        </nav>
      ) : null}

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-foreground hover:bg-muted md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        aria-expanded={showMobileMenu}
        aria-label={showMobileMenu ? "Close menu" : "Open menu"}
      >
        {showMobileMenu ? (
          <Icons.close className="h-5 w-5" />
        ) : (
          <Icons.menu className="h-5 w-5" />
        )}
        <span className="font-semibold">anhht</span>
      </button>

      {showMobileMenu && items && (
        <MobileNav items={items} onClose={() => setShowMobileMenu(false)}>
          {children}
        </MobileNav>
      )}
    </div>
  );
}
