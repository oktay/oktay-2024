import { cn } from "@/lib/utils";

export default function ThematicBreak({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      role="separator"
      className={cn(
        "my-8 text-center text-muted-foreground tracking-[0.5em] select-none",
        className,
      )}
    >
      * * *
    </div>
  );
}
