import Link from "next/link";

import { cn } from "@/lib/utils";
import { LinkType } from "@/types";

import RichText from "./rich-text";
import { Button } from "./ui/button";

export default function MainHero({
  title,
  description,
  links,
  className,
  ...props
}: {
  description: string;
  links: LinkType[];
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <section className={cn("mb-10 mt-4", className)} {...props}>
      <h1 className="font-normal text-3xl">{title}</h1>
      <div className="mt-4">
        <RichText content={description} />
      </div>

      {links.length > 0 && (
        <div className="mt-8 flex gap-2">
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
