import { ArrowUpRightIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";

export default function BookmarkCard({
  link,
  cover,
  title,
  domain,
  excerpt,
}: {
  link: string;
  cover: any;
  title: string;
  domain: string;
  excerpt: string;
}) {
  return (
    <div className="group flex flex-col md:flex-row items-start gap-4 hover-card">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-[16/9] w-full relative md:w-64"
      >
        <Image
          src={cover}
          alt={title}
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
          <ArrowUpRightIcon className="inline align-middle ml-2" size={16} />
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
        <p className="text-muted-foreground text-xs !mt-2">{excerpt}</p>
      </div>
    </div>
  );
}
