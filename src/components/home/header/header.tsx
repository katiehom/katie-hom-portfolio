import MobileMenu from "./mobile-menu/mobile-menu";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="p-6">
      <div className="hidden md:block">
        <Nav />
      </div>
      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
