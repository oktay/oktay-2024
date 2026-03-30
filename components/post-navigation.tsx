import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type PostNavItem = {
  slug: string;
  title: string;
};

export default function PostNavigation({
  previousPost,
  nextPost,
}: {
  previousPost: PostNavItem | null;
  nextPost: PostNavItem | null;
}) {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <nav className="grid gap-3 sm:grid-cols-2">
      {previousPost ? (
        <Link
          href={`/posts/${previousPost.slug}`}
          className="rounded-lg border border-border/70 bg-card/25 px-3.5 py-2.5 transition-colors hover:bg-card/50"
        >
          <span className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-muted-foreground/80">
            <ChevronLeft size={12} />
            Previous Post
          </span>
          <span className="mt-1 block text-sm leading-snug">
            {previousPost.title}
          </span>
        </Link>
      ) : (
        <span />
      )}

      {nextPost && (
        <Link
          href={`/posts/${nextPost.slug}`}
          className="rounded-lg border border-border/70 bg-card/25 px-3.5 py-2.5 text-left transition-colors hover:bg-card/50"
        >
          <span className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-muted-foreground/80">
            Next Post
            <ChevronRight size={12} />
          </span>
          <span className="mt-1 block text-sm leading-snug">
            {nextPost.title}
          </span>
        </Link>
      )}
    </nav>
  );
}
