import MainHero from "@/components/main-hero";
import MainPage from "@/components/main-page";
import ProjectList from "@/components/project-list";
import { PAGE_SLUG } from "@/lib/constants";
import { getMetadata, getPageData } from "@/lib/datocms";

export async function generateMetadata() {
  return await getMetadata(PAGE_SLUG.PROJECTS);
}

export default async function Projects() {
  const page = await getPageData(PAGE_SLUG.PROJECTS);

  return (
    <MainPage>
      <MainHero
        title={page.title}
        description={page.description}
        links={page.links}
      />

      {page.content.projects && (
        <ProjectList projects={page.content.projects} />
      )}
    </MainPage>
  );
}
