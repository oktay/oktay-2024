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
      className={cn("w-full justify-start text-left gap-2 py-8", className)}
      {...props}
    >
      <Link href="/">
        <div className="aspect-square relative w-10 h-10">
          <Image data={author.avatar.image} className="rounded-sm" />
        </div>

        <div className="flex flex-col">
          <span>{author.name}</span>
          <span className="text-muted-foreground">{author.title}</span>
        </div>
      </Link>
    </Button>
  );
}
