"use client";

import Link from "next/link";
import React from "react";
import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

export default function ProjectBackButton() {
  const { t } = useLocale();

  return (
    <Link
      href="/projects"
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute left-[-200px] top-14 hidden xl:inline-flex"
      )}
    >
      <Icons.chevronLeft className="mr-2 h-4 w-4" />
      {t.common.allProjects}
    </Link>
  );
}
