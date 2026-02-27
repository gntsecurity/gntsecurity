import { Link, useLocation } from "react-router-dom";
import { Home, Info, Wrench, Phone, BookOpen } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Services", path: "/services", icon: Wrench },
  { name: "Resources", path: "/customer-resource-library", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Phone },
];

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="gnt-container">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="GNT Security" className="h-8 w-auto" />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-sm font-semibold text-slate-900">GNT Security</span>
                <span className="text-xs text-slate-500">
                  Managed IT & Cybersecurity · United States
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1 text-sm">
              {navItems.map(({ name, path, icon: Icon }) => {
                const active = pathname === path;
                return (
                  <Link
                    key={name}
                    to={path}
                    className={[
                      "group inline-flex items-center gap-2 rounded-xl px-3 py-2 transition",
                      active
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                    ].join(" ")}
                  >
                    <Icon className={["h-5 w-5", active ? "text-brand-700" : "text-slate-900"].join(" ")} />
                    {name}
                  </Link>
                );
              })}
              <a href="mailto:sales@gntsecurity.com" className="ml-3 gnt-btn-brand">
                Email Sales
              </a>
            </nav>
          </div>
        </div>
      </header>

      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-slate-200/70 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="gnt-container">
          <div className="flex justify-around py-2">
            {navItems.map(({ name, path, icon: Icon }) => {
              const active = pathname === path;
              return (
                <Link
                  key={name}
                  to={path}
                  className={[
                    "group flex flex-col items-center rounded-xl px-3 py-2 text-[11px] transition",
                    active ? "text-brand-700" : "text-slate-600 hover:text-slate-900",
                  ].join(" ")}
                >
                  <Icon className={["h-5 w-5 mb-1", active ? "text-brand-700" : "text-slate-900"].join(" ")} />
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
