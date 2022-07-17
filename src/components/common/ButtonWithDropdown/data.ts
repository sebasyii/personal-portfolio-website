import {
  FiBarChart,
  FiBookOpen,
  FiCode,
  FiFileText,
  FiGrid,
  FiMousePointer,
  FiRepeat,
  FiShield,
  FiShieldOff,
} from "react-icons/fi";

export const items = [
  {
    title: "CTF",
    description:
      "This place contains writeups on the CTFs that I have particpated in.",
    href: "/resource?type=ctf",
    icon: FiShieldOff,
  },
  {
    title: "Cheatsheets",
    description: "Here you will find all the cheatsheets I have written.",
    href: "/resource?type=cheatsheets",
    icon: FiBookOpen,
  },
  {
    title: "Development",
    description:
      "Here you will find all the development resources I have written.",
    href: "/resource?type=development",
    icon: FiCode,
  },
];
