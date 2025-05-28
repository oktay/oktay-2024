import { ArrowUpRightIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { BookmarkType } from "@/types";

import { Badge } from "./ui/badge";

export default function BookmarkCard({
  bookmark: { _id, link, cover, title, domain, excerpt, tags },
  className,
  ...props
}: { bookmark: BookmarkType } & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      data-id={_id}
      className={cn(
        "group flex flex-col md:flex-row items-start gap-4 relative",
        className,
      )}
      {...props}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-[12/6.3] w-full relative md:w-64"
      >
        <Image
          src={cover}
          alt={title}
          loading="lazy"
          className="hover:opacity-90 transition bg-muted rounded group-hover:shadow-xl object-cover border"
          fill
          unoptimized
        />
      </a>

      <div className="flex-1 relative">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-medium block"
        >
          {title}
          <ArrowUpRightIcon className="inline align-middle ml-1" size={16} />
        </a>
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm text-muted-foreground"
        >
          <GlobeIcon className="inline align-middle mr-1" size={12} />
          {domain}
        </a>
        <p
          className="text-muted-foreground text-xs line-clamp-3 !mt-2"
          title={excerpt}
        >
          {excerpt}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link key={tag} href={`/bookmarks/${encodeURIComponent(tag)}`}>
              <Badge variant="secondary">{tag}</Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
