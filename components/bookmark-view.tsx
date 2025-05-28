import { PAGE_SIZE } from "@/lib/constants";
import { CollectionType } from "@/types";

import BookmarksList from "./bookmark-list";
import BookmarkPagination from "./bookmark-pagination";

export default async function BookmarkView({
  collection,
  page,
}: {
  tag?: string;
  collection: CollectionType;
  page: number;
}) {
  return (
    <div className="space-y-12">
      {collection.items.length > 0 && (
        <BookmarksList bookmarks={collection.items} />
      )}
      {collection.count > PAGE_SIZE && (
        <BookmarkPagination count={collection.count} currentPage={page} />
      )}
    </div>
  );
}
