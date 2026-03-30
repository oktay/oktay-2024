export default function BackToTopLink({ className }: { className?: string }) {
  return (
    <a
      href="#"
      className={
        className ||
        "text-sm text-muted-foreground transition-colors hover:text-accent"
      }
    >
      Back to top
    </a>
  );
}
