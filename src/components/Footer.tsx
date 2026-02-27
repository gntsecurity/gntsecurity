import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="gnt-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="text-lg font-semibold text-slate-900">
              GNT Security LLC
            </div>
            <p className="text-sm text-slate-600">
              Serving clients nationwide.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900 mb-4">
              Company
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link to="/about" className="hover:text-slate-900 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-slate-900 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-slate-900 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-slate-900 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900 mb-4">
              Resources
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link
                  to="/customer-resource-library"
                  className="hover:text-slate-900 transition"
                >
                  Customer Resource Library
                </Link>
              </li>
              <li>
                <Link to="/sla" className="hover:text-slate-900 transition">
                  SLA
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-slate-900 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-slate-900 transition">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900 mb-4">
              Contact
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="mailto:sales@gntsecurity.com"
                  className="hover:text-slate-900 transition"
                >
                  info@gntsecurity.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15104690947"
                  className="hover:text-slate-900 transition"
                >
                  (510) 469-0947
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} GNT Security LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}