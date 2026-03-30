/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { Image } from "react-datocms";

import { getAuthor } from "@/lib/datocms";
import { cn } from "@/lib/utils";

import { Button, ButtonProps } from "./ui/button";

export default async function Author({
  variant = "outline",
  className,
  asChild = true,
  ...props
}: ButtonProps) {
  const author = await getAuthor();

  return (
    <Button
      variant={variant}
      asChild={asChild}
      className={cn(
        "w-full justify-start gap-3 rounded-xl border border-border/70 bg-card/30 py-9 text-left backdrop-blur-md supports-[backdrop-filter]:bg-card/20 hover:border-border/85 hover:bg-card/40 supports-[backdrop-filter]:hover:bg-card/28",
        className,
      )}
      {...props}
    >
      <Link href="/">
        <div className="aspect-square relative w-10 h-10">
          <Image
            data={author.avatar.image}
            className="rounded-md border border-border/70"
          />
        </div>

        <div className="flex flex-col">
          <span className="font-medium">{author.name}</span>
          <span className="text-muted-foreground text-xs">{author.title}</span>
        </div>
      </Link>
    </Button>
  );
}
