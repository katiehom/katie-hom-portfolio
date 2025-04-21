import SectionTab from "@/components/ui/section-tab";
import CaseStudiesList from "../case-studies/case-studies-list";
import PortfolioItemsList from "./portfolio-items-list";

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative scroll-mt-16 bg-indigo-950 px-6 md:px-20"
    >
      <SectionTab bgColor="bg-indigo-950" textColor="text-white">
        Portfolio
      </SectionTab>
      <div className="mx-auto max-w-7xl text-center sm:text-left">
        <CaseStudiesList />
        <div className="flex justify-center pb-48 text-white">
          {/* <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            eaque magnam necessitatibus vitae? Nihil ullam at quam minima quis
            nemo voluptatum vero expedita, explicabo aperiam numquam earum
            maxime praesentium mollitia!
          </p> */}
          {/* {portfolioItems.map((item) => (
                <ApproachItemDropdown key={item.id} item={item} />
              ))} */}
          {/* <PortfolioItemsList /> */}
        </div>
      </div>
    </section>
  );
}
