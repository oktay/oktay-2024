import { toNextMetadata } from "react-datocms";

import ProjectCard from "@/components/project-card";
import RichText from "@/components/rich-text";
import { performRequest } from "@/lib/datocms";
import { projectsQuery, projectsSeoQuery } from "@/lib/query";

export async function generateMetadata() {
  const response = await performRequest({ query: projectsSeoQuery });
  return toNextMetadata([...response.data.projects.seo]);
}

export default async function Projects() {
  const { data } = await performRequest({ query: projectsQuery });

  return (
    <section className="animate-page-scale-in origin-top">
      <div className="container max-w-4xl">
        <RichText content={data.page.description} />

        <hr className="my-8" />

        <div className="mt-8 flex flex-col gap-8">
          {data.projects.map(
            (project: {
              id: string;
              title: string;
              description: any;
              url: string;
              image: any;
              tags: string;
            }) => (
              <ProjectCard key={project.id} {...project} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
