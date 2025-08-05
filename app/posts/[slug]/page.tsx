import MainPage from "@/components/main-page";
import RichText from "@/components/rich-text";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getPostData, getPostMetadata } from "@/lib/datocms";

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

  return (
    <MainPage>
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

      <h1 className="text-3xl font-medium mb-4">{post.title}</h1>
      <div className="text-muted-foreground">{date}</div>
      <RichText content={post.content} />
    </MainPage>
  );
}
