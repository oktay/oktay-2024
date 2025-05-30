import PostCard from "@/components/post-card";
import {
  Table,
  TableBody,
  TableCaption,
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
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <Table>
      <TableCaption>
        Total {sortedPosts.length} {sortedPosts.length === 1 ? "post" : "posts"}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-20">Year</TableHead>
          <TableHead className="w-20">Date</TableHead>
          <TableHead>Title</TableHead>
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
  );
}
