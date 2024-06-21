"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";

export default function NavLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
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
        {icon} {label}
        {isExternal && <ArrowUpRight size={14} className="ml-auto" />}
      </Link>
    </Button>
  );
}
