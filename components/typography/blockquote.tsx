import { cn } from "@/lib/utils";

export default function Blockquote({
  className,
  ...props
}: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      {...props}
      className={cn(
        "border-l-2 border-foreground/20 pl-4 my-6 text-muted-foreground italic",
        className,
      )}
    />
  );
}
