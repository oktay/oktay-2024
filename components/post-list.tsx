import PostCard from "@/components/post-card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PostType } from "@/types";

export default function PostList({
  posts,
}: {
  posts: PostType[];
} & React.HTMLProps<HTMLDivElement>) {
  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-md border border-border/80 bg-secondary/55 px-2.5 py-1 text-xs text-foreground">
            All posts
          </span>
          <span className="rounded-md border border-border/70 bg-card/35 px-2.5 py-1 text-xs text-muted-foreground">
            Newest first
          </span>
        </div>

        <span className="rounded-md border border-border/70 bg-card/40 px-2.5 py-1 text-xs text-muted-foreground">
          Total {sortedPosts.length}{" "}
          {sortedPosts.length === 1 ? "post" : "posts"}
        </span>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20 text-[11px] uppercase tracking-wider text-muted-foreground/90">
              Year
            </TableHead>
            <TableHead className="w-24 text-[11px] uppercase tracking-wider text-muted-foreground/90">
              Date
            </TableHead>
            <TableHead className="text-[11px] uppercase tracking-wider text-muted-foreground/90">
              Title
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPosts.length > 0 ? (
            sortedPosts.map((post) => <PostCard key={post.id} {...post} />)
          ) : (
            <TableRow>
              <TableHead colSpan={4} className="text-center">
                No posts found.
              </TableHead>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
