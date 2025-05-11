import { cn, groupBookmarkByDay } from "@/lib/utils";
import { BookmarkType } from "@/types";

import BookmarkCard from "./bookmark-card";

export default function BookmarksList({
  bookmarks,
  className,
  ...props
}: {
  bookmarks: BookmarkType[];
} & React.HTMLProps<HTMLDivElement>) {
  const { groupedBookmarks, dates } = groupBookmarkByDay(bookmarks);

  return (
    <div className={cn("grid lg:grid-cols-2 gap-8", className)} {...props}>
      {dates.map((date) => (
        <div key={date} className="flex flex-col lg:flex-col gap-8 relative">
          <strong className="block font-medium text-muted-foreground">
            {date}
          </strong>

          <div className="relative flex flex-col gap-8 flex-1">
            {groupedBookmarks[date].map((bookmark: any) => (
              <BookmarkCard key={bookmark._id} bookmark={bookmark} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
