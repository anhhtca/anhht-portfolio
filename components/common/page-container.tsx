"use client";

import React from "react";
import { useLocale } from "@/hooks/use-locale";
import { LocaleDictionary } from "@/locales/types";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title?: string;
  description?: string;
  pageKey?: keyof LocaleDictionary["pages"];
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  pageKey,
  children,
}: PageContainerProps) {
  const { t } = useLocale();

  const finalTitle = pageKey ? t.pages[pageKey].title : (title || "");
  const finalDescription = pageKey ? t.pages[pageKey].description : (description || "");

  return (
    <ClientPageWrapper>
      <div>
        <PageHeader title={finalTitle} description={finalDescription} />
        <div className="mx-4 sm:mx-6 lg:mx-8 max-w-full overflow-x-hidden">
          {children}
        </div>
      </div>
    </ClientPageWrapper>
  );
}
