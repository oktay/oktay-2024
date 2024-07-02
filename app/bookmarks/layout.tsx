import MainHero from "@/components/main-hero";
import MainPage from "@/components/main-page";
import { PAGE_SLUG } from "@/lib/constants";
import { getMetadata, getPageData } from "@/lib/datocms";

export async function generateMetadata() {
  return await getMetadata(PAGE_SLUG.BOOKMARKS);
}

export default async function BookmarksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const page = await getPageData(PAGE_SLUG.BOOKMARKS);

  return (
    <MainPage>
      <MainHero
        title={page.title}
        description={page.description}
        links={page.links}
      />

      {children}
    </MainPage>
  );
}