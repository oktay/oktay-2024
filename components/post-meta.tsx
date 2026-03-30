export default function PostMeta({
  date,
  readingTime,
}: {
  date: string;
  readingTime: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
      <span>{date}</span>
      <span>&middot;</span>
      <span>{readingTime}</span>
    </div>
  );
}
