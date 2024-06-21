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

  const years = Object.keys(groupedExperiences).sort(
    (a, b) => Number(b) - Number(a),
  );

  return { groupedExperiences, years };
}
