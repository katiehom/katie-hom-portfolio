import type { ApproachItem } from "@/types/approach";
import { FaUsersGear, FaCubesStacked } from "react-icons/fa6";
import { TbChartTreemap } from "react-icons/tb";
import { MdRocketLaunch } from "react-icons/md";
import { IoBug } from "react-icons/io5";

export const approachItems: ApproachItem[] = [
  {
    id: 1,
    icon: FaUsersGear,
    title: "Problem Analysis & Collaboration",
    description:
      "I start by collaborating closely with stakeholders to understand goals, identify key problems, and research technical solutions that meet both user and business needs.",
  },
  {
    id: 2,
    icon: TbChartTreemap,
    title: "Architecture & Planning",
    description:
      "I design detailed data models, map user journeys, and create a development roadmap with clear milestones, choosing the right tools for the job.",
  },
  {
    id: 3,
    icon: FaCubesStacked,
    title: "Implementation",
    description:
      "I build modular, maintainable code with clear separation of concerns, focusing on scalability, adaptability, and collaborative workflows.",
  },
  {
    id: 4,
    icon: IoBug,
    title: "Testing & Quality Assurance",
    description:
      "Through rigorous manual testing, user flow validation, and ongoing learning in automated testing frameworks like Vitest and React Testing Library, I ensure reliable, high-quality results.",
  },
  {
    id: 5,
    icon: MdRocketLaunch,
    title: "Deployment & Optimization",
    description:
      "I prioritize performance, accessibility, and documentation to ensure seamless deployment and easy future maintenance.",
  },
];
