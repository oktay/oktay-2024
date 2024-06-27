import { toNextMetadata } from "react-datocms";

import MainPage from "@/components/main-page";
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
    <MainPage>
      <RichText content={data.page.description} />
      <div className="mt-8 flex flex-col gap-8">
        {data.projects.map((project: any) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </MainPage>
  );
}
