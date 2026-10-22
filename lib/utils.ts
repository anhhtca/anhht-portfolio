import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateFromObj(input?: Date): string {
  if (!input) return "";
  const date = new Date(input);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getProjectThumbnail(project: {
  id?: string;
  thumbnail?: string;
  websiteLink?: string;
  companyLogoImg?: string | any;
}): string {
  // 1) If thumbnail in source is already a local public path, return directly
  if (
    project.thumbnail &&
    project.thumbnail.trim() !== "" &&
    project.thumbnail.startsWith("/") &&
    !project.thumbnail.startsWith("/api/")
  ) {
    return project.thumbnail;
  }

  // Resolve through the 4-tier pipeline:
  // 1) Public folder -> 2) Source thumbnail -> 3) Web OG -> 4) Dynamic OG
  if (project.id) {
    return `/api/og/project?id=${encodeURIComponent(project.id)}`;
  }

  if (project.thumbnail && project.thumbnail.trim() !== "") {
    return project.thumbnail;
  }
  if (project.websiteLink && project.websiteLink.startsWith("http")) {
    return `/api/og?url=${encodeURIComponent(project.websiteLink)}`;
  }
  return project.companyLogoImg || "/logo.png";
}
