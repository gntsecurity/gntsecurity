import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <p className="text-[11px] tracking-[0.3em] uppercase text-slate-400 mb-4">
          Oops, page not found
        </p>
        <div className="text-[112px] leading-none font-black tracking-tight text-slate-900 mb-3">
          404
        </div>
        <p className="text-xs md:text-sm text-slate-500 max-w-md mx-auto mb-10">
          We are sorry, but the page you requested was not found or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs md:text-sm">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-8 py-2.5 font-semibold tracking-wide hover:bg-slate-800"
          >
            Back to home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-2.5 font-medium tracking-wide text-slate-700 hover:border-slate-400 hover:text-slate-900"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}
