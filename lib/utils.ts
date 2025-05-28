import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { BookmarkType, ExperienceType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatISODate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function formatMonthYear(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function groupExperienceByYear(experiences: ExperienceType[]): {
  groupedExperiences: Record<string, ExperienceType[]>;
  years: string[];
} {
  const groupedExperiences = experiences.reduce(
    (acc, item) => {
      const year = new Date(item.startDate).getFullYear().toString();

      acc[year] = acc[year] || [];
      acc[year].push(item);

      return acc;
    },
    {} as Record<string, ExperienceType[]>,
  );

  const years = Object.keys(groupedExperiences).sort(
    (a, b) => Number(b) - Number(a),
  );

  return { groupedExperiences, years };
}

export function groupBookmarksByMonth(bookmarks: BookmarkType[]): {
  groupedBookmarks: Record<string, BookmarkType[]>;
  months: string[];
} {
  const groupedBookmarks = bookmarks.reduce(
    (acc, bookmark) => {
      const date = formatMonthYear(bookmark.created);

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(bookmark);

      return acc;
    },
    {} as Record<string, BookmarkType[]>,
  );

  const months = Object.keys(groupedBookmarks).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  );

  return { groupedBookmarks, months };
}

export function uniqueTags(items: BookmarkType[]) {
  return Array.from(new Set(items.flatMap((item) => item.tags)));
}
