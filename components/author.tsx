import Link from "next/link";
import { Image } from "react-datocms";

import { performRequest } from "@/lib/datocms";
import { authorQuery } from "@/lib/query";

import { Button } from "./ui/button";

export default async function Author() {
  const { data } = await performRequest({ query: authorQuery });

  return (
    <Button
      variant="outline"
      className="w-full justify-start text-left gap-2 py-8"
      asChild
    >
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          data={data.author.profilePicture.responsiveImage}
          className="rounded-full"
        />

        <div className="flex flex-col">
          <span>{data.author.name}</span>
          <span className="text-muted-foreground">{data.author.job}</span>
        </div>
      </Link>
    </Button>
  );
}
