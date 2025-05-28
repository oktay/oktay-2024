import ExperienceList from "@/components/experience-list";
import MainHero from "@/components/main-hero";
import MainPage from "@/components/main-page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PAGE_SLUG } from "@/lib/constants";
import { getMetadata, getPageData } from "@/lib/datocms";

export async function generateMetadata() {
  return await getMetadata(PAGE_SLUG.EXPERIENCES);
}

export default async function Experiences() {
  const page = await getPageData(PAGE_SLUG.EXPERIENCES);

  return (
    <MainPage>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Experiences</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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
