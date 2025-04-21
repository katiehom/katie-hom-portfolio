import PortfolioItem from "./portfolio-item";

export default function PortfolioItemsList() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h3 className="text-2xl text-indigo-100">Portfolio</h3>
      <div className="flex flex-wrap justify-center gap-10">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
      <div className="flex gap-10">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
      <div className="flex gap-10">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
    </div>
  );
}
