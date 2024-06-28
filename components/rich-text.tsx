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
      }}
      {...props}
    >
      {content}
    </Markdown>
  );
}
