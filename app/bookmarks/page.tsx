import BookmarkView from "@/components/bookmark-view";
import { COLLECTION_ID } from "@/lib/constants";
import { getRaindropCollection } from "@/lib/raindrop";

export default async function BookmarksPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const currentPage = searchParams.p ? parseInt(searchParams.p) : 1;
  const collection = await getRaindropCollection(
    COLLECTION_ID,
    currentPage - 1,
  );

  return <BookmarkView page={currentPage} collection={collection} />;
}
