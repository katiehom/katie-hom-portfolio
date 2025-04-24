import type { NavItem } from "@/types/nav";
import { FaArrowUpWideShort, FaBook, FaPaperPlane } from "react-icons/fa6";
import { RiGalleryFill } from "react-icons/ri";
import { TbInfoHexagonFilled } from "react-icons/tb";

export const navLinks: NavItem[] = [
  {
    id: 1,
    label: "About",
    href: "#about",
    icon: TbInfoHexagonFilled,
  },
  {
    id: 2,
    label: "Approach",
    href: "#approach",
    icon: FaArrowUpWideShort,
  },
  {
    id: 3,
    label: "Case Studies",
    href: "#case-studies",
    icon: FaBook,
  },
  {
    id: 4,
    label: "Portfolio",
    href: "#portfolio",
    icon: RiGalleryFill,
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
    icon: FaPaperPlane,
  },
];
