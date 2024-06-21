import { toNextMetadata } from "react-datocms";

import ExperienceCard from "@/components/experience-card";
import RichText from "@/components/rich-text";
import { performRequest } from "@/lib/datocms";
import { experiencesQuery, experiencesSeoQuery } from "@/lib/query";
import { groupExperienceByYear } from "@/lib/utils";

export async function generateMetadata() {
  const response = await performRequest({ query: experiencesSeoQuery });
  return toNextMetadata([...response.data.experiences.seo]);
}

export default async function Home() {
  const { data } = await performRequest({ query: experiencesQuery });
  const { groupedExperiences, years } = groupExperienceByYear(data.experiences);

  return (
    <section id="experiences">
      <div className="container max-w-4xl">
        <RichText content={data.page.description} />

        <hr className="my-8" />

        <div className="mt-8 space-y-12">
          {years.map((year) => (
            <div
              key={year}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16"
            >
              <strong className="text-xl font-medium">{year}</strong>

              <div className="relative flex flex-col gap-24">
                {groupedExperiences[year].map((experience: any) => (
                  <ExperienceCard key={experience.id} {...experience} />
                ))}

                <div className="absolute top-0 left-6 w-px h-full bg-muted-foreground/20 after:w-2 after:h-2 after:bg-muted-foreground/20 after:rounded-full after:absolute after:-bottom-2 after:-left-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
