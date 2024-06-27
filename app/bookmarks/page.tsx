import { toNextMetadata } from "react-datocms";

import BookmarkView from "@/components/bookmark-view";
import MainPage from "@/components/main-page";
import RichText from "@/components/rich-text";
import { COLLECTION_ID } from "@/lib/constants";
import { performRequest } from "@/lib/datocms";
import { bookmarksQuery, bookmarksSeoQuery } from "@/lib/query";
import { getRaindropCollection } from "@/lib/raindrop";

export async function generateMetadata() {
  const response = await performRequest({ query: bookmarksSeoQuery });
  return toNextMetadata([...response.data.bookmarks.seo]);
}

export default async function BookmarksPage() {
  const { data } = await performRequest({ query: bookmarksQuery });
  const { items } = await getRaindropCollection(COLLECTION_ID);

  return (
    <MainPage>
      <RichText content={data.page.description} />
      <div className="mt-10">
        <BookmarkView bookmarks={items} />
      </div>
    </MainPage>
  );
}
