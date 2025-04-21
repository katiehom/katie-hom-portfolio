import Image from "next/image";
import SectionTab from "@/components/ui/section-tab";
import SkillsAndTools from "./skills-and-tools";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="prose relative scroll-mt-16 bg-indigo-700 px-6 pt-12 pb-24 md:px-20 md:pt-20 md:pb-36"
    >
      <SectionTab bgColor="bg-indigo-700" textColor="text-white">
        About Me
      </SectionTab>
      <div className="mx-auto max-w-3xl pb-8 text-center md:pb-16">
        <div className="mb-10 flex items-center justify-center md:mb-16">
          <Image
            src="/katieSmile.jpg"
            width={150}
            height={150}
            alt="Katie Hom smiling"
            className="rounded-full shadow-lg"
          />
        </div>
        <p className="mb-4 text-sm leading-relaxed text-white sm:text-base md:text-lg lg:mb-6 lg:text-xl">
          As a software engineer with a background in education, research, and
          the arts, I develop thoughtful, impactful web experiences. I
          specialize in simplifying complex ideas, connecting technical
          solutions to real-world needs, creating products that not only look
          great, but create tangible value for users and businesses alike.
        </p>
        <p className="text-sm leading-relaxed text-white sm:text-base md:text-lg lg:text-xl">
          I build with care, collaborate with intention, and never stop
          improving.
        </p>
      </div>
      <SkillsAndTools />
    </section>
  );
}
