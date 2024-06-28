import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { BookmarkGroupType, BookmarkType, ExperienceType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatISODate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
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

export function groupBookmarkByDay(bookmarks: BookmarkType[]): {
  groupedBookmarks: BookmarkGroupType;
  dates: string[];
} {
  const groupedBookmarksByDate = bookmarks.reduce(
    (acc: BookmarkGroupType, bookmark: BookmarkType) => {
      const formattedDate = formatDate(new Date(bookmark.created));

      if (!acc[formattedDate]) {
        acc[formattedDate] = [];
      }

      acc[formattedDate].push(bookmark);

      return acc;
    },
    {},
  );

  const dates = Object.keys(groupedBookmarksByDate).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  );

  return { groupedBookmarks: groupedBookmarksByDate, dates };
}

export function uniqueTags(items: BookmarkType[]) {
  return Array.from(new Set(items.flatMap((experience) => experience.tags)));
}
