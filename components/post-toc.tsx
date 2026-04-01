"use client";

import { useActiveHeading } from "@/lib/hooks";
import { type TocHeading } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function PostToc({ headings }: { headings: TocHeading[] }) {
  const { activeId, setActiveId } = useActiveHeading(headings);

  if (!headings.length) {
    return null;
  }

  return (
    <aside className="hidden xl:block">
      <div className="surface-card sticky top-24 p-4">
        <strong className="block text-xs uppercase tracking-wider text-muted-foreground/90">
          On This Page
        </strong>
        <nav className="mt-3 space-y-1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(event) => {
                event.preventDefault();
                const element = document.getElementById(heading.id);

                if (!element) {
                  return;
                }

                setActiveId(heading.id);
                element.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.replaceState(null, "", `#${heading.id}`);
              }}
              className={cn(
                "block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
                heading.level === 3 && "pl-5 text-xs",
                activeId === heading.id && "bg-secondary/60 text-foreground",
              )}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
