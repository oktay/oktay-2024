import BookmarkView from "@/components/bookmark-view";
import MainHero from "@/components/main-hero";
import MainPage from "@/components/main-page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { COLLECTION_ID, PAGE_SLUG } from "@/lib/constants";
import { getPageData } from "@/lib/datocms";
import { getRaindropCollection } from "@/lib/raindrop";

export default async function BookmarksPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const page = await getPageData(PAGE_SLUG.BOOKMARKS);
  const currentPage = searchParams.p ? parseInt(searchParams.p) : 1;
  const collection = await getRaindropCollection(
    COLLECTION_ID,
    currentPage - 1,
  );

  return (
    <MainPage>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize">{page.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <MainHero
        title={page.title}
        description={page.description}
        links={page.links}
      />

      <BookmarkView page={currentPage} collection={collection} />
    </MainPage>
  );
}
