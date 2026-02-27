import { navlinks } from "@/constants";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <header className="bg-rose-200 w-full py-4 flex items-center justify-between">
      <div className="container">
        {/* logo */}
        <h1 className="text-xl font-bold text-rose-900">
          Dessert & Coffee Store
        </h1>

        <nav>
          <ul className="flex items-center gap-6">
            {navlinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  to={href}
                  className="text-rose-900 hover:text-rose-700 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
