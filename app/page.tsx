import { toNextMetadata } from "react-datocms";

import Hero from "@/components/sections/hero";
import { performRequest, SEO_QUERY } from "@/lib/datocms";

export async function generateMetadata() {
  const response = await performRequest({ query: SEO_QUERY });
  return toNextMetadata([...response.data.homepage.seo]);
}

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
