"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

// Animation variants for the navigation items
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

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
    <div className="flex items-center gap-6 md:gap-10">
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
            anhht
          </span>
        </Link>
      </motion.div>
      {items?.length ? (
        <nav className="hidden items-center gap-6 md:flex">
          {items?.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-foreground/80",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {getNavTitle(item.href, item.title)}
              </Link>
            </motion.div>
          ))}
        </nav>
      ) : null}
      <motion.button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">{t.nav.menu}</span>
      </motion.button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
