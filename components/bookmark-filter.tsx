import { TabsProps } from "@radix-ui/react-tabs";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { COLLECTION_ID } from "@/lib/constants";
import { getRaindropCollectionTags } from "@/lib/raindrop";

import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default async function BookmarkFilter({
  defaultValue = "all",
  ...props
}: TabsProps) {
  const { items } = await getRaindropCollectionTags(COLLECTION_ID);

  const total = items.reduce((acc, item) => acc + item.count, 0);

  return (
    <Tabs defaultValue={defaultValue} {...props}>
      <TabsList className="overflow-x-auto h-auto flex-wrap justify-start gap-y-2">
        <TabsTrigger value="all" asChild>
          <Link href="/bookmarks">
            All <Badge className="leading-none ml-2">{total}</Badge>
          </Link>
        </TabsTrigger>

        {items.map((item) => (
          <TabsTrigger key={item._id} value={item._id} asChild>
            <Link
              href={`/bookmarks/${encodeURIComponent(item._id)}`}
              className="capitalize"
            >
              {item._id}{" "}
              <Badge className="leading-none ml-2">{item.count}</Badge>
            </Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
