import { ArrowUpRight } from "lucide-react";
import { Image } from "react-datocms";

import RichText from "./rich-text";
import { Badge } from "./ui/badge";

export default function ProjectCard({
  title,
  description,
  url,
  image,
  tags,
}: {
  id: string;
  title: string;
  description: any;
  url: string;
  image: any;
  tags: string;
}) {
  return (
    <div className="grid gap-4">
      <a href={url} target="_blank">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          data={image.responsiveImage}
          className="rounded-lg hover:opacity-90 transition"
        />
      </a>

      <div className="flex flex-col h-full md:p-4">
        <strong className="font-medium">{title}</strong>

        <div className="text-muted-foreground">
          <RichText content={description} />
        </div>

        <div className="mt-2 flex items-center gap-1">
          <a href={url} target="_blank" className="text-sm">
            {url.replace(/https?:\/\//, "")}
          </a>
          <ArrowUpRight size={14} />
        </div>

        <div className="flex gap-2 mt-8">
          {tags.split(",").map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
