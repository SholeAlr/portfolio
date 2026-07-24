import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { IconType } from "react-icons";

export interface Social {
  name: string;
  href: string;
  icon: IconType;
  external?: boolean;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/SholeAlr",
    icon: FiGithub,
    external: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/shole-alirezaei",
    icon: FiLinkedin,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:sholeh.alrz@gmail.com",
    icon: FiMail,
  },
];
