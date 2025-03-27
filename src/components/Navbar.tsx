import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Layers,
  Wrench,
  Phone,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Procezly", path: "/procezly", icon: Layers },
  { name: "Services", path: "/services", icon: Wrench },
  { name: "Contact", path: "/contact", icon: Phone },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:block w-full border-b border-gray-200 bg-white">
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

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex justify-around items-center py-2 md:hidden">
        {navItems.map(({ name, path, icon: Icon }) => (
          <Link
            key={name}
            to={path}
            className={`flex flex-col items-center text-xs ${
              pathname === path ? "text-blue-600" : "text-gray-500"
            }`}
          >
            <Icon className="h-5 w-5 mb-1" />
            {name}
          </Link>
        ))}
      </nav>
    </>
  );
}
