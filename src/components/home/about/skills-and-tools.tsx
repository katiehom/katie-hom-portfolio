import type { ReactNode } from "react";
import { FaReact, FaNode, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: ReactNode;
}

export default function SkillsAndTools() {
  const coreSkills: Skill[] = [
    { name: "React", icon: <FaReact className="text-lg" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-lg" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-lg" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-lg" /> },
    { name: "Node.js", icon: <FaNode className="text-lg" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-lg" /> },
    { name: "Figma", icon: <FaFigma className="text-lg" /> },
  ];

  const additionalSkills: string[] = [
    "WordPress",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Auth0",
    "Stripe",
    "Git",
    "GitHub",
    "Jira",
  ];

  return (
    <>
      <div className="mt-6">
        <h4 className="mb-8 text-center text-xl font-medium text-indigo-50 sm:text-2xl">
          Core Skills &amp; Tools
        </h4>
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {coreSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 rounded-full bg-indigo-800 px-3 py-1.5 text-xs text-white inset-shadow-sm inset-shadow-indigo-950/75 backdrop-blur-sm md:px-4 md:py-2 md:text-sm"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {additionalSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-indigo-900/60 px-2 py-0.5 text-xs text-indigo-100 inset-shadow-sm inset-shadow-indigo-950/75 md:px-3 md:py-1 md:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
