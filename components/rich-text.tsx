import Markdown from "react-markdown";

export default function RichText({
  content,
  ...props
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
        p: ({ node: _node, ...props }) => (
          <p
            {...props}
            className="text-muted-foreground text-sm md:text-base font-light"
          />
        ),
        ul: ({ node: _node, ...props }) => (
          <ul {...props} className="list-disc font-light pl-4 space-y-2 my-4" />
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
      }}
      {...props}
    >
      {content}
    </Markdown>
  );
}
