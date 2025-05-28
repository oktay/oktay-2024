import { ResolvingMetadata } from "next";

import BookmarkView from "@/components/bookmark-view";
import MainPage from "@/components/main-page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { COLLECTION_ID } from "@/lib/constants";
import { getRaindropCollection } from "@/lib/raindrop";

type Props = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
) {
  return {
    title: `${decodeURIComponent(params.tag)} - ${(await parent).title?.absolute}`,
  };
}

export default async function BookmarksPage({ params, searchParams }: Props) {
  const currentPage = searchParams.p ? parseInt(searchParams.p) : 1;
  const collection = await getRaindropCollection(
    COLLECTION_ID,
    currentPage - 1,
    params.tag,
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
            <BreadcrumbLink href="/bookmarks">Bookmarks</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize">
              {decodeURIComponent(params.tag)}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="font-normal text-3xl mb-10 capitalize mt-4">
        {decodeURIComponent(params.tag)}
      </h1>

      <BookmarkView
        tag={params.tag}
        collection={collection}
        page={currentPage}
      />
    </MainPage>
  );
}
