import Image from "next/image";
import Markdown from "react-markdown";

import { isImageOnlyParagraph } from "@/lib/utils";

import {
  Anchor,
  Blockquote,
  CodeBlock,
  Heading,
  InlineCode,
  List,
  ListItem,
  Paragraph,
  ThematicBreak,
} from "./typography";

export default function RichText({
  content,
}: { content: string } & React.HTMLProps<HTMLDivElement>) {
  return (
    <Markdown
      components={{
        a: ({ node: _node, ...props }) => <Anchor {...props} />,
        p: ({ node, ...props }) =>
          isImageOnlyParagraph(node) ? (
            <p {...props} className="flex gap-2" />
          ) : (
            <Paragraph {...props} />
          ),
        ul: ({ node: _node, ...props }) => <List {...props} />,
        ol: ({ node: _node, ...props }) => <List ordered {...props} />,
        li: ({ node: _node, ...props }) => <ListItem {...props} />,
        h1: ({ node: _node, ...props }) => <Heading level={1} {...props} />,
        h2: ({ node: _node, ...props }) => <Heading level={2} {...props} />,
        h3: ({ node: _node, ...props }) => <Heading level={3} {...props} />,
        h4: ({ node: _node, ...props }) => <Heading level={4} {...props} />,
        h5: ({ node: _node, ...props }) => <Heading level={5} {...props} />,
        h6: ({ node: _node, ...props }) => <Heading level={6} {...props} />,
        strong: ({ node: _node, ...props }) => (
          <strong {...props} className="font-medium" />
        ),
        em: ({ node: _node, ...props }) => <em {...props} className="italic" />,
        code: ({ node: _node, ...props }) => <InlineCode {...props} />,
        pre: ({ node: _node, ...props }) => <CodeBlock {...props} />,
        hr: ({ node: _node, ...props }) => <ThematicBreak {...props} />,
        table: ({ node: _node, ...props }) => (
          <div className="my-6 overflow-x-auto">
            <table {...props} className="w-full text-sm border-collapse" />
          </div>
        ),
        th: ({ node: _node, ...props }) => (
          <th
            {...props}
            className="border border-border px-3 py-2 text-left font-medium"
          />
        ),
        td: ({ node: _node, ...props }) => (
          <td {...props} className="border border-border px-3 py-2 align-top" />
        ),
        blockquote: ({ node: _node, ...props }) => <Blockquote {...props} />,
        img: ({ node: _node, ...props }) => {
          if (!props.src) {
            return null;
          }

          return (
            <span className="relative block h-64 w-full md:h-72">
              <Image
                src={props.src}
                className="rounded-lg border border-border object-cover"
                alt={props.alt || "Image"}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </span>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}
