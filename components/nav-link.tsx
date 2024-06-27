"use client";

import {
  ArrowUpRight,
  BookmarkIcon,
  DraftingCompassIcon,
  SparklesIcon,
  TentIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";

const iconMap: Record<string, any> = {
  Home: <TentIcon size={16} />,
  Experiences: <SparklesIcon size={16} />,
  Projects: <DraftingCompassIcon size={16} />,
  Bookmarks: <BookmarkIcon size={16} />,
};

export default function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isExternal = href.includes("//");

  return (
    <Button
      key={href}
      variant={isActive ? "default" : "ghost"}
      className="w-full justify-start text-left gap-4"
      asChild
    >
      <Link href={href} target={isExternal ? "_blank" : ""}>
        {iconMap[label]} {label}
        {isExternal && <ArrowUpRight size={14} className="ml-auto" />}
      </Link>
    </Button>
  );
}
