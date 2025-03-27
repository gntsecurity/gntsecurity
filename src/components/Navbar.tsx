import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Procezly", path: "/procezly" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="GNT Security Logo" className="h-8 w-auto" />
        </Link>

        <nav className="space-x-6">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-sm font-medium transition hover:text-blue-600 ${
                pathname === path ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
