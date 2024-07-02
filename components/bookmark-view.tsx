import { PAGE_SIZE } from "@/lib/constants";
import { CollectionType } from "@/types";

import BookmarkFilter from "./bookmark-filter";
import BookmarksList from "./bookmark-list";
import BookmarkPagination from "./bookmark-pagination";

export default function BookmarkView({
  tag,
  collection,
  page,
}: {
  tag?: string;
  collection: CollectionType;
  page: number;
}) {
  return (
    <div className="space-y-12">
      <BookmarkFilter defaultValue={decodeURIComponent(tag || "all")} />

      {collection.items.length > 0 && (
        <BookmarksList bookmarks={collection.items} />
      )}
      {collection.count > PAGE_SIZE && (
        <BookmarkPagination count={collection.count} currentPage={page} />
      )}
    </div>
  );
}
