export default function PostTldr({
  text,
  truncated,
}: {
  text: string;
  truncated: boolean;
}) {
  if (!text.length) {
    return null;
  }

  return (
    <div className="mt-5 rounded-xl border border-border/70 bg-card/35 p-4">
      <strong className="block text-xs uppercase tracking-wider text-muted-foreground/90">
        TL;DR
      </strong>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">
        {text}
        {truncated ? "..." : ""}
      </p>
    </div>
  );
}
