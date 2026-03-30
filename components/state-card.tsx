import { cn } from "@/lib/utils";

type StateCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
};

export default function StateCard({
  title,
  description,
  icon,
  actions,
  className,
}: StateCardProps) {
  return (
    <div className="flex min-h-[calc(100dvh-8rem)] items-center justify-center py-12">
      <div
        className={cn(
          "relative w-full max-w-xl overflow-hidden rounded-2xl border border-border/70 bg-card/30 p-8 text-center backdrop-blur-md supports-[backdrop-filter]:bg-card/18",
          className,
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/22 via-background/10 to-transparent"
        />

        <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/8">
          {icon}
        </div>

        <h1 className="relative mt-5 text-2xl font-semibold tracking-tight">
          {title}
        </h1>
        <p className="relative mt-2 text-sm text-muted-foreground">
          {description}
        </p>

        {actions && <div className="relative mt-6">{actions}</div>}
      </div>
    </div>
  );
}
