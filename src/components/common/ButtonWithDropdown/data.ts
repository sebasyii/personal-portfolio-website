import { FiBookOpen, FiCode, FiShieldOff, FiTerminal } from "react-icons/fi";

export const items = [
  {
    title: "CTF",
    description:
      "This place contains writeups on the CTFs that I have particpated in.",
    href: "/ctf",
    icon: FiShieldOff,
  },
  {
    title: "Cheatsheets",
    description: "Here you will find all the cheatsheets I have written.",
    href: "/cheatsheets",
    icon: FiBookOpen,
  },
  {
    title: "Development",
    description:
      "Here you will find all the development resources I have written.",
    href: "/development",
    icon: FiCode,
  },
  {
    title: "Snippets",
    description: "Here you will find all the snippets I have written.",
    href: "/snippets",
    icon: FiTerminal,
  },
];
