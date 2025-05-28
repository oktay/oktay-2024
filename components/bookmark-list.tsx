import { cn, groupBookmarksByMonth } from "@/lib/utils";
import { BookmarkType } from "@/types";

import BookmarkCard from "./bookmark-card";

export default function BookmarksList({
  bookmarks,
  className,
  ...props
}: {
  bookmarks: BookmarkType[];
} & React.HTMLProps<HTMLDivElement>) {
  const { groupedBookmarks, months } = groupBookmarksByMonth(bookmarks);

  return (
    <div className={cn("flex flex-col gap-12", className)} {...props}>
      {months.map((month) => (
        <div key={month} className="flex flex-col lg:flex-col gap-8 relative">
          <strong className="block font-medium">{month}</strong>

          <div className="relative flex flex-col gap-8 flex-1">
            {groupedBookmarks[month].map((bookmark: any) => (
              <BookmarkCard key={bookmark._id} bookmark={bookmark} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
