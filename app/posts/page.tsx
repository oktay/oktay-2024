import MainHero from "@/components/main-hero";
import MainPage from "@/components/main-page";
import PostList from "@/components/post-list";
import { PAGE_SLUG } from "@/lib/constants";
import { getMetadata, getPageData } from "@/lib/datocms";

export async function generateMetadata() {
  return await getMetadata(PAGE_SLUG.POSTS);
}

export default async function Posts() {
  const page = await getPageData(PAGE_SLUG.POSTS);

  return (
    <MainPage>
      <MainHero
        title={page.title}
        description={page.description}
        links={page.links}
      />

      {page.content.posts && <PostList posts={page.content.posts} />}
    </MainPage>
  );
}
