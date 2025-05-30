import { CollectionTagsType, CollectionType } from "@/types";

import { PAGE_SIZE } from "./constants";

const API_URL = "https://api.raindrop.io/rest/v1";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_RAINDROP_API_TOKEN}`,
  },
  next: {
    revalidate: 0,
  },
};

export async function fetchRaindrop(path: string) {
  const response = await fetch(`${API_URL}/${path}`, options);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return await response.json();
}

export async function getRaindropCollection(
  collectionId: string,
  page: number = 0,
  tag?: string,
): Promise<CollectionType> {
  const path = `/raindrops/${collectionId}?sort=-created&page=${page}&perpage=${PAGE_SIZE}`;
  const search = tag ? `&search=[{ "key": "tag", "val": "${tag}" }]` : "";
  return await fetchRaindrop(`${path}${search}`);
}

export async function getRaindropCollectionTags(
  collectionId: string,
): Promise<CollectionTagsType> {
  const path = `/tags/${collectionId}`;
  return await fetchRaindrop(path);
}
