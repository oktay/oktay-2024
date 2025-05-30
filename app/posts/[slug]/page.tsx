import MainPage from "@/components/main-page";
import RichText from "@/components/rich-text";
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
      <h1 className="text-3xl font-medium mb-4">{post.title}</h1>
      <div className="text-muted-foreground">{date}</div>
      <RichText content={post.content} />
    </MainPage>
  );
}
