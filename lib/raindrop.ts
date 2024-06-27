const API_URL = "https://api.raindrop.io/rest/v1";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_RAINDROP_API_TOKEN}`,
  },
  next: {
    revalidate: 60 * 60 * 12,
  },
};

export async function getRaindropCollections() {
  const response = await fetch(`${API_URL}/collections`, options);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export async function getRaindropCollection(collectionId: string) {
  const response = await fetch(`${API_URL}/raindrops/${collectionId}`, options);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
