import { LINKS, SOCIALS } from "@/lib/constants";

import Author from "./author";
import NavLink from "./nav-link";

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-4 py-4">
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
    </nav>
  );
}
