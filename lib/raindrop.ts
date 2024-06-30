import { CollectionType } from "@/types";

const API_URL = "https://api.raindrop.io/rest/v1";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_RAINDROP_API_TOKEN}`,
  },
  next: {
    revalidate: 3600,
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
): Promise<CollectionType> {
  return await fetchRaindrop(`/raindrops/${collectionId}`);
}
