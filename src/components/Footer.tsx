import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [website, setWebsite] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!res.ok || !data?.ok) {
        setError(data?.error || "Unable to subscribe right now.");
        return;
      }

      setSubscribed(true);
      setEmail("");
      setWebsite("");
    } catch {
      setError("Unable to subscribe right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-white/70 backdrop-blur">
      <div className="gnt-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="GNT Security" className="h-8 w-auto" />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-slate-900">GNT Security</p>
                <p className="text-xs text-slate-500">Managed IT & Cybersecurity</p>
              </div>
            </div>

            <div className="text-sm text-slate-700 space-y-2">
              <p className="gnt-muted">
                United States coverage · Headquarters in Oakland, CA · Offices nationwide
              </p>
              <div className="text-xs text-slate-500 leading-relaxed">
                <div>495 Jackson Street #1130</div>
                <div>Oakland, CA 94607</div>
                <div>United States</div>
              </div>
            </div>

            <div className="text-sm text-slate-700 space-y-2">
              <p>
                <span className="font-semibold text-slate-900">Sales & General:</span>{" "}
                <a href="mailto:sales@gntsecurity.com" className="text-brand-700 hover:underline break-all">
                  sales@gntsecurity.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-slate-900">Phone:</span>{" "}
                <a href="tel:+15104690947" className="text-brand-700 hover:underline">
                  (510) 469-0947
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
              <Link to="/procezly" className="hover:text-brand-700 hover:underline underline-offset-4">
                Procezly
              </Link>
              <a
                href="https://staff.gntsecurity.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-700 hover:underline underline-offset-4"
              >
                Staff Portal
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="gnt-card p-6 sm:p-8">
              <p className="text-sm font-semibold text-slate-900">Stay ahead of outages and security issues</p>
              <p className="mt-2 text-sm text-slate-600">
                Join the mailing list for maintenance windows, security tips, and service updates from GNT Security.
              </p>

              <div className="mt-6">
                {subscribed ? (
                  <p className="text-sm font-semibold text-emerald-700">Subscribed. Thank you.</p>
                ) : (
                  <>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        autoComplete="off"
                        tabIndex={-1}
                        className="hidden"
                        aria-hidden="true"
                      />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError(null);
                        }}
                        className="gnt-input flex-1"
                        placeholder="you@example.com"
                      />
                      <button type="submit" disabled={loading} className="gnt-btn-brand px-6">
                        {loading ? "Subscribing..." : "Subscribe"}
                      </button>
                    </form>
                    {error ? (
                      <div className="mt-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                        {error}
                      </div>
                    ) : null}
                  </>
                )}
              </div>

              <div className="mt-8 gnt-divider pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-slate-500">
                  © {new Date().getFullYear()} GNT Security. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <Link to="/privacy-policy" className="text-slate-500 hover:text-slate-900 hover:underline underline-offset-4">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="text-slate-500 hover:text-slate-900 hover:underline underline-offset-4">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
