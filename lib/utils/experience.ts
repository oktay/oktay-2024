import { type ExperienceType } from "@/types";

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
