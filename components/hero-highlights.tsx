import { HighlightType } from "@/types";

export default function HeroHighlights({
  highlights,
}: {
  highlights: HighlightType[];
}) {
  if (highlights.length === 0) {
    return null;
  }

  return (
    <div className="hero-reveal hero-reveal-1 mb-5 flex flex-wrap gap-2">
      {highlights.map(({ title }) => (
        <span
          key={title}
          className="rounded-full border border-border/80 bg-card/45 px-2.5 py-1 text-xs text-muted-foreground"
        >
          {title}
        </span>
      ))}
    </div>
  );
}
