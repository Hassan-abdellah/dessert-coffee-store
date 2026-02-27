import { navlinks } from "@/constants";
import { Link } from "react-router";
import DessertIconSVG from "../Icons/DessertIconSVG";
import CoffeeCupSVG from "../Icons/CoffeeCupSVG";
const Navbar = () => {
  return (
    <header className="bg-rose-400/50 w-full py-4 sticky top-0 left-0 z-50  backdrop-blur-3xl">
      <div className="container flex items-center justify-between">
        {/* logo */}
        <Link to="/" className="text-xl font-bold text-rose-900">
          D&C Store
        </Link>

        <nav>
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-1 group">
              <DessertIconSVG classNames="stroke-rose-900 group-hover:stroke-rose-700 transition duration-300" />
              <Link
                to={navlinks[0].href}
                className="text-rose-900 group-hover:text-rose-700 transition-colors duration-300"
              >
                {navlinks[0].label}
              </Link>
            </li>

            <li className="flex items-center gap-1 group">
              <CoffeeCupSVG classNames="fill-rose-900 group-hover:fill-rose-700 transition duration-300" />
              <Link
                to={navlinks[1].href}
                className="text-rose-900 group-hover:text-rose-700 transition-colors duration-300"
              >
                {navlinks[1].label}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
