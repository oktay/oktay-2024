import Link from "next/link";

import { TableCell, TableRow } from "@/components/ui/table";
import { PostType } from "@/types";

export default function PostCard({ slug, title, publishedAt }: PostType) {
  const year = new Date(publishedAt).getFullYear();
  const date = new Date(publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });

  return (
    <TableRow>
      <TableCell className="w-20">{year}</TableCell>
      <TableCell className="w-20">{date}</TableCell>
      <TableCell>
        <Link href={`/posts/${slug}`} className="border-b">
          {title}
        </Link>
      </TableCell>
    </TableRow>
  );
}
