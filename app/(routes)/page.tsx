import Link from "next/link";
import { toNextMetadata } from "react-datocms";

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
    <section>
      <div className="container max-w-4xl">
        <RichText content={data.hero.description} />

        <div className="mt-8 flex gap-2">
          {data.hero.actions.map(
            (
              action: {
                link: string;
                title: string;
              },
              index: number,
            ) => (
              <Button
                key={action.link}
                variant={index !== 0 ? "outline" : "default"}
                asChild
              >
                <Link href={action.link} target="_blank">
                  {action.title}
                </Link>
              </Button>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
