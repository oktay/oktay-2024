import { TabsProps } from "@radix-ui/react-tabs";

import { uniqueTags } from "@/lib/utils";
import { CollectionType } from "@/types";

import BookmarksList from "./bookmark-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function BookmarkView({
  collection: { items },
  defaultValue = "all",
  ...props
}: { collection: CollectionType } & TabsProps) {
  const tags = uniqueTags(items);
  const tabs = ["all", ...tags];

  function filterByTag(tag: string) {
    return items.filter(
      (bookmark) => tag === "all" || bookmark.tags.includes(tag),
    );
  }

  return (
    <Tabs defaultValue={defaultValue} {...props}>
      <TabsList className="overflow-x-auto h-auto flex-wrap justify-start gap-y-2">
        {tabs.map((tab) => (
          <TabsTrigger key={tab} value={tab}>
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab} value={tab} className="py-8">
          <BookmarksList bookmarks={filterByTag(tab)} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
