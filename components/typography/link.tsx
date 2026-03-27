import { cn } from "@/lib/utils";

export default function Anchor({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={cn(
        "underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground/60 transition-colors",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
}
