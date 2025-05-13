import { cn, groupExperienceByYear } from "@/lib/utils";
import { ExperienceType } from "@/types";

import ExperienceCard from "./experience-card";

export default function ExperienceList({
  experiences,
  className,
  ...props
}: {
  experiences: ExperienceType[];
} & React.HTMLProps<HTMLDivElement>) {
  const { groupedExperiences, years } = groupExperienceByYear(experiences);

  return (
    <div className={cn("space-y-12", className)} {...props}>
      {years.map((year) => (
        <div
          key={year}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative"
        >
          <strong className="block text-xl font-light md:sticky md:top-4 h-full">
            {year}
          </strong>

          <div className="relative flex flex-col gap-24">
            {groupedExperiences[year].map((experience: any) => (
              <ExperienceCard key={experience.id} {...experience} />
            ))}

            <div
              className="absolute top-0 left-6 w-px h-full bg-muted-foreground/20
              after:w-2 after:h-2 after:bg-muted-foreground/20 after:rounded-full 
              after:absolute after:-bottom-2 after:-left-1"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
