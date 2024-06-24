import { GithubIcon } from "lucide-react";

import { LINKS, SOCIALS } from "@/lib/constants";

import Author from "./author";
import { ModeToggle } from "./mode-toggle";
import NavLink from "./nav-link";
import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-4 py-4 md:h-[100dvh]">
      <Author />

      <div className="flex flex-col">
        {LINKS.map(({ href, label, icon }) => (
          <NavLink key={href} href={href} label={label} icon={icon} />
        ))}
      </div>

      <hr className="mx-4" />

      <div className="flex flex-col">
        <strong className="text-xs text-muted-foreground font-medium px-4 mb-2">
          Social
        </strong>

        {SOCIALS.map(({ href, label, icon }) => (
          <NavLink key={href} href={href} label={label} icon={icon} />
        ))}
      </div>

      <div className="mt-auto flex gap-2">
        <ModeToggle />
        <Button variant="outline" className="flex-1" asChild>
          <a href="//github.com/oktay/oktay-2024" target="_blank">
            <GithubIcon className="h-4 w-4 mr-2" />
            <span>Source code</span>
          </a>
        </Button>
      </div>
    </nav>
  );
}
