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
  thumbnail?: string;
  websiteLink?: string;
  companyLogoImg?: string | any;
}): string {
  if (project.thumbnail && project.thumbnail.trim() !== "") {
    return project.thumbnail;
  }
  if (project.websiteLink && project.websiteLink.startsWith("http")) {
    return `/api/og?url=${encodeURIComponent(project.websiteLink)}`;
  }
  return project.companyLogoImg || "/logo.png";
}
