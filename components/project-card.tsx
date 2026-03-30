/* eslint-disable jsx-a11y/alt-text */

import { ArrowUpRight } from "lucide-react";
import { Image } from "react-datocms";

import { cn } from "@/lib/utils";
import { ProjectType } from "@/types";

import RichText from "./rich-text";
import { Badge } from "./ui/badge";

export default function ProjectCard({
  title,
  url,
  description,
  thumbnail,
  tags,
  className,
  ...props
}: ProjectType & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "group surface-card h-full p-3",
        "transition-all duration-200 ease-out",
        "hover:border-border hover:bg-card/60 hover:shadow-sm",
        className,
      )}
      {...props}
    >
      <a href={url} target="_blank" className="col-span-2">
        <div className="aspect-[16/9] overflow-hidden rounded-sm border border-border/70">
          <Image
            data={thumbnail.image}
            className="h-full w-full transition duration-200 group-hover:opacity-95"
            pictureClassName="h-full w-full object-cover"
          />
        </div>
      </a>

      <div className="flex h-full flex-col px-2 pt-4 pb-2">
        <span className="truncate text-[11px] uppercase tracking-wider text-muted-foreground/85">
          {url.replace(/https?:\/\//, "")}
        </span>

        <strong className="mt-2 text-[1.08rem] font-medium leading-tight">
          {title}
        </strong>

        <div className="mt-2 text-muted-foreground [&_p]:my-0 [&_p]:leading-7 md:[&_p]:leading-7">
          <RichText content={description} />
        </div>

        <div className="mt-4 flex items-center justify-between gap-4 border-t border-border/70 pt-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge variant="secondary" key={tag.name}>
                {tag.name}
              </Badge>
            ))}
          </div>

          <a
            href={url}
            target="_blank"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/80 bg-card/45 text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent"
            aria-label={`Open ${title} project`}
          >
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
