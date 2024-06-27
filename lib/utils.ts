import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatISODate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function groupExperienceByYear(experiences: any[]) {
  const groupedExperiences = experiences.reduce(
    (acc: Record<string, any>, item: any) => {
      const year = new Date(item.startDate).getFullYear();

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(item);

      return acc;
    },
    {},
  );

  const years = Object.keys(groupedExperiences).sort().reverse();

  return { groupedExperiences, years };
}

export function groupBookmarkByDay(bookmarks: any[]) {
  const groupedBookmarks = bookmarks.reduce(
    (acc: Record<string, any>, item: any) => {
      const date = new Date(item.created).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(item);

      return acc;
    },
    {},
  );

  const dates = Object.keys(groupedBookmarks).sort().reverse();

  return { groupedBookmarks, dates };
}
