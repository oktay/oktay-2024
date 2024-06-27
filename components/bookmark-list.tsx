import { groupBookmarkByDay } from "@/lib/utils";

import BookmarkCard from "./bookmark-card";

export default function BookmarksList({ bookmarks }: { bookmarks: any }) {
  const { groupedBookmarks, dates } = groupBookmarkByDay(bookmarks);

  return (
    <div className="flex flex-col gap-24">
      {dates.map((date) => (
        <div
          key={date}
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative"
        >
          <strong className="block font-medium text-muted-foreground lg:sticky lg:top-4 lg:h-full min-w-[100px]">
            {date}
          </strong>

          <div className="relative flex flex-col gap-8 flex-1">
            {groupedBookmarks[date].map((bookmark: any) => (
              <BookmarkCard key={bookmark.id} {...bookmark} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
