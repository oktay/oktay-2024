import { BriefcaseIcon, CodeIcon, GithubIcon, HomeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

export default function Navigation() {
  const LINKS = [
    {
      href: "/",
      label: "Home",
      icon: <HomeIcon size={16} />,
    },
    {
      href: "#experiences",
      label: "Experiences",
      icon: <BriefcaseIcon size={16} />,
    },
    {
      href: "#projects",
      label: "Projects",
      icon: <CodeIcon size={16} />,
    },
    {
      href: "#github",
      label: "Github",
      icon: <GithubIcon size={16} />,
    },
  ];

  return (
    <nav className="space-y-2 py-4">
      <div>
        <Button
          variant="outline"
          className="w-full justify-start text-left gap-2 py-8"
          asChild
        >
          <Link href="/">
            <Image
              src="/me.jpg"
              alt="Oktay Çolakoğlu"
              width={40}
              height={40}
              className="rounded-full"
            />

            <div className="flex flex-col">
              <span>Oktay Çolakoğlu</span>
              <span className="text-muted-foreground">Frontend Developer</span>
            </div>
          </Link>
        </Button>
      </div>

      <div className="flex flex-col">
        {LINKS.map(({ href, label, icon }) => (
          <Button
            key={href}
            variant="ghost"
            className="w-full justify-start text-left gap-4"
            asChild
          >
            <Link href={href}>
              {icon} {label}
            </Link>
          </Button>
        ))}
      </div>
    </nav>
  );
}
