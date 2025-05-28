"use client";

import {
  ArrowUpRight,
  BookmarkIcon,
  DraftingCompassIcon,
  HomeIcon,
  SparklesIcon,
} from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Button, ButtonProps } from "./ui/button";

const iconMap: Record<string, any> = {
  Home: <HomeIcon size={16} />,
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
      variant={isActive ? "default" : "ghost"}
      className={cn("w-full justify-start text-left gap-4", className)}
      asChild={asChild}
      {...props}
    >
      <Link href={href} target={isExternal ? "_blank" : ""}>
        {iconMap[label]} {label}
        {isExternal && <ArrowUpRight size={14} className="ml-auto" />}
      </Link>
    </Button>
  );
}
