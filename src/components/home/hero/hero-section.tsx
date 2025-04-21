import Image from "next/image";
import AnimatedHeading from "./animated-heading";

export default function HeroSection() {
  return (
    <section className="pb-24">
      <div className="flex flex-col items-center justify-center pt-6">
        <div>
          <Image
            src="/OrigamiBirdIconWhite.png"
            alt="White outline origami bird"
            width={150}
            height={150}
          />
        </div>
        <div className="mt-12 mb-8 text-center uppercase">
          <h1 className="text-5xl font-semibold text-white">Katie Hom</h1>
          <span className="logo-text ml-1 tracking-[0.35em] text-white">
            Software Engineer
          </span>
        </div>
      </div>
      <AnimatedHeading />
    </section>
  );
}
