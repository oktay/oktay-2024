import {
  BriefcaseIcon,
  CameraIcon,
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

export const DEFAULT_SEO = {
  title: "Hello World",
  description: "Personal Homepage with Next.js and DatoCMS",
};

export const LINKS = [
  {
    href: "/",
    label: "Home",
    icon: <HomeIcon size={16} />,
  },
  {
    href: "/experiences",
    label: "Experiences",
    icon: <BriefcaseIcon size={16} />,
  },
];

export const SOCIALS = [
  {
    href: "//github.com/oktay",
    label: "GitHub",
    icon: <GithubIcon size={16} />,
  },
  {
    href: "//twitter.com/oktaycolakoglu",
    label: "Twitter",
    icon: <TwitterIcon size={16} />,
  },
  {
    href: "//linkedin.com/in/oktaycolakoglu",
    label: "LinkedIn",
    icon: <LinkedinIcon size={16} />,
  },
  {
    href: "//unsplash.com/@oktaycolakoglu",
    label: "Unsplash",
    icon: <CameraIcon size={16} />,
  },
];
