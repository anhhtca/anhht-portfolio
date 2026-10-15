"use client";

import { useLocale } from "@/hooks/use-locale";
import React from "react";

export function BlogsEmptyState() {
  const { t } = useLocale();

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-4xl mb-4">✍️</p>
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {t.pages.blogs.noPosts}
      </h3>
      <p className="text-muted-foreground text-sm">
        {t.pages.blogs.checkBack}
      </p>
    </div>
  );
}
