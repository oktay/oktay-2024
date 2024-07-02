import { ResolvingMetadata } from "next";

import BookmarkView from "@/components/bookmark-view";
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
    <BookmarkView tag={params.tag} collection={collection} page={currentPage} />
  );
}
