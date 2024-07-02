import { TabsProps } from "@radix-ui/react-tabs";
import Link from "next/link";

import { COLLECTION_ID } from "@/lib/constants";
import { getRaindropCollection } from "@/lib/raindrop";
import { uniqueTags } from "@/lib/utils";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default async function BookmarkFilter({
  defaultValue = "all",
  ...props
}: TabsProps) {
  const collection = await getRaindropCollection(COLLECTION_ID);
  const tabs = ["all", ...uniqueTags(collection.items)];

  function createTagLink(tag: string) {
    return tag === "all"
      ? "/bookmarks"
      : `/bookmarks/${encodeURIComponent(tag)}`;
  }

  return (
    <Tabs defaultValue={defaultValue} {...props}>
      <TabsList className="overflow-x-auto h-auto flex-wrap justify-start gap-y-2">
        {tabs.map((tab) => (
          <TabsTrigger key={tab} value={tab} asChild>
            <Link href={createTagLink(tab)}>{tab}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
