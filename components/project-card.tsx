/* eslint-disable jsx-a11y/alt-text */

import { ArrowUpRight } from "lucide-react";
import { Image } from "react-datocms";

import { ProjectType } from "@/types";

import RichText from "./rich-text";
import { Badge } from "./ui/badge";

export default function ProjectCard({
  title,
  url,
  description,
  thumbnail,
  tags,
  ...props
}: ProjectType & React.HTMLProps<HTMLDivElement>) {
  return (
    <div {...props}>
      <a href={url} target="_blank" className="col-span-2">
        <Image
          data={thumbnail.image}
          className="rounded hover:opacity-90 transition"
        />
      </a>

      <div className="flex flex-col py-4">
        <strong className="font-medium">{title}</strong>

        <div className="text-muted-foreground">
          <RichText content={description} />
        </div>

        <div className="flex items-center gap-1">
          <a href={url} target="_blank" className="text-sm">
            {url.replace(/https?:\/\//, "")}
          </a>
          <ArrowUpRight size={14} />
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag) => (
            <Badge key={tag.name}>{tag.name}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
