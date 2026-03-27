import { cn } from "@/lib/utils";

export function CodeBlock({
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      {...props}
      className={cn(
        "bg-muted/50 border border-border rounded-lg p-4 my-6 overflow-x-auto text-sm",
        className,
      )}
    />
  );
}

export function InlineCode({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      {...props}
      className={cn(
        "rounded bg-muted/50 px-1.5 py-0.5 text-[0.85em] font-mono",
        className,
      )}
    />
  );
}
