import Image from "next/image";
import Markdown from "react-markdown";

import { cn, isImageOnlyParagraph } from "@/lib/utils";

export default function RichText({
  content,
}: { content: string } & React.HTMLProps<HTMLDivElement>) {
  return (
    <Markdown
      components={{
        a: ({ node: _node, ...props }) => (
          <a
            {...props}
            className="font-medium text-primary underline underline-offset-4"
            target="_blank"
          />
        ),
        p: ({ node, ...props }) => (
          <p
            {...props}
            className={cn(
              isImageOnlyParagraph(node)
                ? "flex gap-2"
                : "text-sm md:text-base font-light",
              props.className,
            )}
          />
        ),
        ul: ({ node: _node, ...props }) => (
          <ul
            {...props}
            className="list-disc font-light pl-4 space-y-2 my-4 list-inside"
          />
        ),
        strong: ({ node: _node, ...props }) => (
          <strong {...props} className="font-medium" />
        ),
        pre: ({ node: _node, ...props }) => (
          <pre
            {...props}
            className="bg-muted text-xs font-light p-4 rounded-lg my-4 overflow-x-auto"
          />
        ),
        h2: ({ node: _node, ...props }) => (
          <h2
            {...props}
            className="text-2xl font-bold text-primary my-4 border-none"
          />
        ),
        hr: ({ node: _node, ...props }) => (
          <hr {...props} className="border-t border-muted my-8" />
        ),
        img: ({ node: _node, ...props }) => {
          if (!props.src) {
            return null;
          }

          return (
            <span className="relative block h-64 w-full md:h-72">
              <Image
                src={props.src}
                className="rounded-lg border border-muted object-cover"
                alt={props.alt || "Image"}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </span>
          );
        },
        blockquote: ({ node: _node, ...props }) => (
          <blockquote
            {...props}
            className="border-l-2 border-muted-foreground pl-4 italic text-muted-foreground my-4"
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
}
