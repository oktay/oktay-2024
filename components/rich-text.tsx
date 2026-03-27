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
            className={cn(
              "font-medium text-primary underline underline-offset-4",
              props.className,
            )}
            target="_blank"
            rel="noopener noreferrer"
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
            className={cn(
              "list-disc font-light pl-4 space-y-2 my-4 list-inside",
              props.className,
            )}
          />
        ),
        ol: ({ node: _node, ...props }) => (
          <ol
            {...props}
            className={cn(
              "list-decimal font-light pl-4 space-y-2 my-4 list-inside",
              props.className,
            )}
          />
        ),
        li: ({ node: _node, ...props }) => (
          <li {...props} className={cn("leading-relaxed", props.className)} />
        ),
        h1: ({ node: _node, ...props }) => (
          <h1
            {...props}
            className={cn(
              "text-3xl md:text-4xl font-semibold text-primary mt-8 mb-4",
              props.className,
            )}
          />
        ),
        strong: ({ node: _node, ...props }) => (
          <strong {...props} className={cn("font-medium", props.className)} />
        ),
        em: ({ node: _node, ...props }) => (
          <em {...props} className={cn("italic", props.className)} />
        ),
        code: ({ node: _node, ...props }) => (
          <code
            {...props}
            className={cn(
              "rounded bg-muted px-1.5 py-0.5 text-[0.85em] font-mono",
              props.className,
            )}
          />
        ),
        pre: ({ node: _node, ...props }) => (
          <pre
            {...props}
            className={cn(
              "bg-muted text-xs font-light p-4 rounded-lg my-4 overflow-x-auto",
              props.className,
            )}
          />
        ),
        h2: ({ node: _node, ...props }) => (
          <h2
            {...props}
            className={cn(
              "text-2xl font-bold text-primary mt-8 mb-4 border-none",
              props.className,
            )}
          />
        ),
        h3: ({ node: _node, ...props }) => (
          <h3
            {...props}
            className={cn(
              "text-xl font-semibold text-primary mt-6 mb-3",
              props.className,
            )}
          />
        ),
        hr: ({ node: _node, ...props }) => (
          <hr
            {...props}
            className={cn("border-t border-muted my-8", props.className)}
          />
        ),
        table: ({ node: _node, ...props }) => (
          <div className="my-6 overflow-x-auto">
            <table
              {...props}
              className={cn("w-full text-sm border-collapse", props.className)}
            />
          </div>
        ),
        th: ({ node: _node, ...props }) => (
          <th
            {...props}
            className={cn(
              "border border-muted px-3 py-2 text-left font-medium",
              props.className,
            )}
          />
        ),
        td: ({ node: _node, ...props }) => (
          <td
            {...props}
            className={cn(
              "border border-muted px-3 py-2 align-top font-light",
              props.className,
            )}
          />
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
