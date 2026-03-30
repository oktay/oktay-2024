import Link from "next/link";

import { cn } from "@/lib/utils";
import { HighlightType, LinkType, PageType } from "@/types";

import HeroHighlights from "./hero-highlights";
import StructuredText from "./structured-text";
import { Button } from "./ui/button";

export default function MainHero({
  title,
  description,
  links,
  highlights = [],
  className,
  ...props
}: {
  description: PageType["description"];
  links: LinkType[];
  highlights?: HighlightType[];
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <section className={cn("relative mb-12 mt-5", className)} {...props}>
      <HeroHighlights highlights={highlights} />

      <h1
        className={cn(
          "hero-reveal hero-reveal-2 font-normal text-3xl tracking-tight",
        )}
      >
        {title}
      </h1>

      <div className="hero-reveal hero-reveal-4 mt-4 max-w-[68ch] text-muted-foreground [&_p]:leading-7 md:[&_p]:leading-8">
        <StructuredText data={description} />
      </div>

      {links.length > 0 && (
        <div className="hero-reveal hero-reveal-5 mt-8 flex gap-2 flex-wrap">
          {links.map((link) => (
            <Button key={link.link} variant={link.variant} asChild>
              <Link href={link.link} target="_blank">
                {link.title}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </section>
  );
}
