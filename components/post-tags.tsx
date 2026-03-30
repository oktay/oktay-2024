import { TagType } from "@/types";

import { Badge } from "./ui/badge";

export default function PostTags({ tags }: { tags: TagType[] }) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {tags.map(({ name }) => (
        <Badge variant="secondary" key={name}>
          {name}
        </Badge>
      ))}
    </div>
  );
}
