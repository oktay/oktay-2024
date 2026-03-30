import BackToTopLink from "@/components/back-to-top-link";
import MainPage from "@/components/main-page";
import PostMeta from "@/components/post-meta";
import PostNavigation from "@/components/post-navigation";
import PostReadingProgress from "@/components/post-reading-progress";
import PostTags from "@/components/post-tags";
import PostTldr from "@/components/post-tldr";
import PostToc from "@/components/post-toc";
import PostStructuredText from "@/components/structured-text";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { getPostData, getPostMetadata, getPostSiblings } from "@/lib/datocms";
import {
  extractHeadings,
  formatReadingTime,
  toPlainText,
} from "@/lib/post-utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return await getPostMetadata(params.slug);
}

export default async function Posts({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const { next: nextPost, previous: previousPost } = await getPostSiblings(
    post.slug,
    post.publishedAt,
  );

  const plainText = toPlainText(post.content.value);
  const readingTime = formatReadingTime(plainText);
  const tldr = plainText.replace(/\s+/g, " ").trim().slice(0, 220);
  const headings = extractHeadings(post.content.value);

  return (
    <MainPage>
      <PostReadingProgress />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink href="/posts">Posts</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{post.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-4 grid gap-10 xl:grid-cols-[minmax(0,1fr)_240px]">
        <article className="min-w-0 max-w-[74ch]" data-post-content>
          <h1 className="my-4 text-3xl font-medium tracking-tight">
            {post.title}
          </h1>

          <PostMeta date={date} readingTime={readingTime} />
          <PostTags tags={post.tags} />

          <PostTldr text={tldr} truncated={plainText.length > 220} />
          <Separator className="my-8 bg-border/70" />
          <PostStructuredText data={post.content} />
          <Separator className="my-10 bg-border/70" />
          <PostNavigation previousPost={previousPost} nextPost={nextPost} />

          <div className="mt-8">
            <BackToTopLink />
          </div>
        </article>

        <PostToc headings={headings} />
      </div>
    </MainPage>
  );
}
