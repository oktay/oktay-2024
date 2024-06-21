import Markdown from "react-markdown";

export default function RichText({ content }: { content: string }) {
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
        h1: ({ node: _node, ...props }) => (
          <h1 {...props} className="font-medium text-3xl" />
        ),
      }}
    >
      {content}
    </Markdown>
  );
}
