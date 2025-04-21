import AboutMeSection from "./about/about-me-section";
import HeroSection from "./hero/hero-section";
import MyApproachSection from "./approach/my-approach-section";
import PortfolioSection from "./portfolio/portfolio-section";
import ContactMeSection from "./contact/contact-me-section";
import Header from "./header/header";

export default function HomePageComponent() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-pink-500 via-indigo-600 to-indigo-900"></div>
          <div className="absolute inset-0 bg-[url(/subtle-prism.svg)] bg-auto bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-black opacity-35"></div>
        </div>
        <Header />
        <HeroSection />
      </div>
      <AboutMeSection />
      <MyApproachSection />
      <PortfolioSection />
      <ContactMeSection />
    </>
  );
}
