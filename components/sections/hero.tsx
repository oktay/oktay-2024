import Link from "next/link";
import Markdown from "react-markdown";

import { HERO_QUERY, performRequest } from "@/lib/datocms";

import { Button } from "../ui/button";

export default async function Hero() {
  const { data } = await performRequest({ query: HERO_QUERY });

  return (
    <section className="pt-12">
      <div className="container">
        <Markdown
          components={{
            a: ({ node: _node, ...props }) => (
              <a {...props} className="link" target="_blank" />
            ),
          }}
        >
          {data.hero.description}
        </Markdown>

        <div className="mt-4 flex gap-2">
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
