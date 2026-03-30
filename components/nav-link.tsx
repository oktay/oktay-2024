"use client";

import {
  ArrowUpRight,
  BookmarkIcon,
  DraftingCompassIcon,
  FileIcon,
  HomeIcon,
  SparklesIcon,
} from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button, ButtonProps } from "./ui/button";

const iconMap: Record<string, any> = {
  Home: <HomeIcon size={16} />,
  Posts: <FileIcon size={16} />,
  Experiences: <SparklesIcon size={16} />,
  Projects: <DraftingCompassIcon size={16} />,
  Bookmarks: <BookmarkIcon size={16} />,
};

export default function NavLink({
  href,
  label,
  className,
  asChild = true,
  ...props
}: {
  href: string;
  label: string;
} & ButtonProps &
  LinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.includes(href);
  const isExternal = href.includes("//");

  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-4 rounded-xl border border-transparent px-3 text-left",
        "transition-all duration-200 ease-out",
        isActive
          ? "border-border/80 bg-secondary/38 text-foreground supports-[backdrop-filter]:bg-secondary/24 backdrop-blur-md shadow-[inset_0_1px_0_hsl(var(--foreground)/0.05)]"
          : "text-muted-foreground hover:text-foreground hover:border-border/70 hover:bg-secondary/30 supports-[backdrop-filter]:hover:bg-secondary/20 hover:backdrop-blur-sm",
        className,
      )}
      asChild={asChild}
      {...props}
    >
      <Link href={href} target={isExternal ? "_blank" : ""}>
        <span className={cn("transition-colors", isActive && "text-accent")}>
          {iconMap[label]}
        </span>{" "}
        {label}
        {isExternal && <ArrowUpRight size={14} className="ml-auto" />}
      </Link>
    </Button>
  );
}
