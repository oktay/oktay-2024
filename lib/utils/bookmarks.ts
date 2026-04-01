import { type BookmarkType } from "@/types";

import { formatMonthYear } from "./date";

export function groupBookmarksByMonth(bookmarks: BookmarkType[]): {
  groupedBookmarks: Record<string, BookmarkType[]>;
  months: string[];
} {
  const groupedBookmarks = bookmarks.reduce(
    (acc, bookmark) => {
      const date = formatMonthYear(bookmark.created);

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(bookmark);

      return acc;
    },
    {} as Record<string, BookmarkType[]>,
  );

  const months = Object.keys(groupedBookmarks).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime(),
  );

  return { groupedBookmarks, months };
}

export function uniqueTags(items: BookmarkType[]) {
  return Array.from(new Set(items.flatMap((item) => item.tags)));
}
