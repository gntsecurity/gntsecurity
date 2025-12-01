import { Link, useLocation } from "react-router-dom";
import { Home, Info, Wrench, Phone } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Services", path: "/services", icon: Wrench },
  { name: "Contact", path: "/contact", icon: Phone },
];

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="GNT Security"
              className="h-8 w-auto"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-semibold text-sm">GNT Security</span>
              <span className="text-xs text-gray-500">
                Managed IT & Cybersecurity – Ohio
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            {navItems.map(({ name, path, icon: Icon }) => (
              <Link
                key={name}
                to={path}
                className={`inline-flex items-center gap-2 ${
                  pathname === path ? "text-blue-600 font-semibold" : "text-gray-600"
                } hover:text-blue-700`}
              >
                <Icon className="h-4 w-4" />
                {name}
              </Link>
            ))}
            <a
              href="mailto:sales@gntsecurity.com"
              className="ml-4 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
            >
              Email Sales
            </a>
          </nav>
        </div>
      </header>

      <nav className="md:hidden fixed bottom-0 inset-x-0 border-t bg-white z-40 flex justify-around py-2">
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
