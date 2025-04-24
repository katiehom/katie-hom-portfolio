import NavItem from "./nav-item";
import { navLinks } from "../../../lib/nav-links";

export default function Nav() {
  return (
    <nav className="flex justify-center">
      <ul className="flex gap-6 rounded-xl border border-indigo-500/50 px-4 py-0.5 text-xs text-white">
        {navLinks.map((item) => (
          <NavItem key={item.id} href={item.href} label={item.label} />
        ))}
      </ul>
    </nav>
  );
}
