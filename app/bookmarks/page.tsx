import BookmarkView from "@/components/bookmark-view";
import MainHero from "@/components/main-hero";
import MainPage from "@/components/main-page";
import { COLLECTION_ID, PAGE_SLUG } from "@/lib/constants";
import { getMetadata, getPageData } from "@/lib/datocms";
import { getRaindropCollection } from "@/lib/raindrop";

export async function generateMetadata() {
  return await getMetadata(PAGE_SLUG.BOOKMARKS);
}

export default async function BookmarksPage() {
  const page = await getPageData(PAGE_SLUG.BOOKMARKS);
  const collection = await getRaindropCollection(COLLECTION_ID);

  return (
    <MainPage>
      <MainHero
        title={page.title}
        description={page.description}
        links={page.links}
      />

      {collection.items && <BookmarkView collection={collection} />}
    </MainPage>
  );
}
