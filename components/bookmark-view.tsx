import BookmarksList from "./bookmark-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function BookmarkView({ bookmarks }: { bookmarks: any[] }) {
  const tags = Array.from(
    new Set(bookmarks.flatMap((bookmark) => bookmark.tags)),
  );

  const tabs = ["all", ...tags];

  return (
    <Tabs defaultValue="all">
      <TabsList className="overflow-x-auto h-auto flex-wrap justify-start gap-y-2">
        {tabs.map((tab) => (
          <TabsTrigger key={tab} value={tab}>
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab} value={tab} className="py-12">
          <BookmarksList
            bookmarks={bookmarks.filter(
              (bookmark) => tab === "all" || bookmark.tags.includes(tab),
            )}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
