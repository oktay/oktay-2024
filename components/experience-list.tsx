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
    <div className={cn("space-y-10", className)} {...props}>
      {years.map((year) => (
        <div
          key={year}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative"
        >
          <strong className="block text-lg font-light text-muted-foreground/85 md:sticky md:top-6 h-full">
            {year}
          </strong>

          <div className="relative flex flex-col gap-20">
            {groupedExperiences[year].map((experience: any) => (
              <ExperienceCard key={experience.id} {...experience} />
            ))}

            <div
              className="absolute top-0 bottom-8 left-6 w-px bg-border/90
              after:w-2 after:h-2 after:bg-accent/65 after:rounded-full 
              after:absolute after:-bottom-2 after:-left-1"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
