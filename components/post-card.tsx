import Link from "next/link";

import { TableCell, TableRow } from "@/components/ui/table";
import { calculateReadingMinutes, toPlainText } from "@/lib/utils";
import { PostType } from "@/types";

export default function PostCard({
  slug,
  title,
  publishedAt,
  content,
  tags,
}: PostType) {
  const year = new Date(publishedAt).getFullYear();
  const date = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });
  const plainText = toPlainText(content?.value);
  const excerpt = plainText.slice(0, 120);
  const readingTime = calculateReadingMinutes(plainText);
  const firstTag = tags?.[0]?.name;

  return (
    <TableRow className="group hover:bg-secondary/35">
      <TableCell className="relative w-20 py-5 pl-5 align-top tabular-nums">
        <span className="absolute bottom-0 left-0 top-0 w-0.5 bg-accent/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <Link
          href={`/posts/${slug}`}
          className="block py-1 text-sm font-normal text-foreground/75"
        >
          {year}
        </Link>
      </TableCell>
      <TableCell className="w-24 py-5 align-top tabular-nums">
        <Link
          href={`/posts/${slug}`}
          className="block py-1 text-xs font-medium text-muted-foreground"
        >
          {date}
        </Link>
      </TableCell>
      <TableCell className="py-5 align-top">
        <Link
          href={`/posts/${slug}`}
          className="block rounded-md p-1 -m-1 transition-colors duration-200"
        >
          <span className="inline text-[1.06rem] font-medium border-b border-transparent transition-colors duration-200 group-hover:border-accent/50 group-hover:text-accent">
            {title}
          </span>
          {excerpt.length > 0 && (
            <span className="mt-1 line-clamp-1 block text-sm text-foreground/75">
              {excerpt}
              {plainText.length > 120 ? "..." : ""}
            </span>
          )}
          <span className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
            <span>{readingTime} min read</span>
            {firstTag && (
              <span className="text-muted-foreground/60">&middot;</span>
            )}
            {firstTag && (
              <span className="rounded-full border border-border/80 bg-secondary/70 px-2 py-0.5 text-foreground/85">
                {firstTag}
              </span>
            )}
          </span>
        </Link>
      </TableCell>
    </TableRow>
  );
}
