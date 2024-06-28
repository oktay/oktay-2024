import ExperienceList from "@/components/experience-list";
import MainHero from "@/components/main-hero";
import MainPage from "@/components/main-page";
import { PAGE_SLUG } from "@/lib/constants";
import { getMetadata, getPageData } from "@/lib/datocms";

export async function generateMetadata() {
  return await getMetadata(PAGE_SLUG.EXPERIENCES);
}

export default async function Experiences() {
  const page = await getPageData(PAGE_SLUG.EXPERIENCES);

  return (
    <MainPage>
      <MainHero
        title={page.title}
        description={page.description}
        links={page.links}
      />

      {page.content.experiences && (
        <ExperienceList experiences={page.content.experiences} />
      )}
    </MainPage>
  );
}
