import type { HTMLAttributes } from "react";

import { slugifyHeading } from "@/lib/post-utils";
import { extractTextFromReactChildren } from "@/lib/react-node-utils";
import { cn } from "@/lib/utils";

const styles: Record<number, string> = {
  1: "text-2xl font-semibold tracking-tight mt-10 mb-3",
  2: "text-xl font-semibold tracking-tight mt-8 mb-2",
  3: "text-lg font-medium tracking-tight mt-6 mb-2",
  4: "text-base font-medium mt-5 mb-1",
  5: "text-sm font-medium mt-4 mb-1",
  6: "text-sm font-medium mt-4 mb-1",
};

type Props = HTMLAttributes<HTMLHeadingElement> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Heading({ level, className, ...props }: Props) {
  const Tag = `h${level}` as const;
  const text = extractTextFromReactChildren(props.children);
  const generatedId = props.id || (text ? slugifyHeading(text) : undefined);
  const shouldTrackInToc = level === 2 || level === 3;

  return (
    <Tag
      {...props}
      id={generatedId}
      data-toc={shouldTrackInToc ? "true" : undefined}
      className={cn(styles[level], "scroll-mt-24", className)}
    />
  );
}
