"use client";
import { useLocale } from "@/hooks/use-locale";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ResumePage() {
  const { t } = useLocale();

  useEffect(() => {
    redirect(process.env.NEXT_PUBLIC_RESUME_LINK || "/");
  }, []);
  return <div>{t.pages.resume.redirecting}</div>;
}
