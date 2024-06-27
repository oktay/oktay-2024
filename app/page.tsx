import Link from "next/link";
import { toNextMetadata } from "react-datocms";

import MainPage from "@/components/main-page";
import RichText from "@/components/rich-text";
import { Button } from "@/components/ui/button";
import { performRequest } from "@/lib/datocms";
import { homepageQuery, homepageSeoQuery } from "@/lib/query";

export async function generateMetadata() {
  const response = await performRequest({ query: homepageSeoQuery });
  return toNextMetadata([...response.data.homepage.seo]);
}

export default async function Home() {
  const { data } = await performRequest({ query: homepageQuery });

  return (
    <MainPage>
      <RichText content={data.hero.description} />
      <div className="mt-8 flex gap-2">
        {data.hero.buttons.map((action: any) => (
          <Button key={action.link} variant={action.variant} asChild>
            <Link href={action.link} target="_blank">
              {action.title}
            </Link>
          </Button>
        ))}
      </div>
    </MainPage>
  );
}
