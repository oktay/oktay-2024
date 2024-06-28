import { cn } from "@/lib/utils";

export default function MainPage({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <main
      className={cn(
        "animate-page-scale-in origin-top py-12 2xl:py-24",
        className,
      )}
      {...props}
    >
      <div className="container max-w-5xl">{children}</div>
    </main>
  );
}
