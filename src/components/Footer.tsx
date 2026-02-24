import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubscribed(true);
        setEmail("");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="border-t bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1.5fr] gap-10 items-start">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-900">GNT Security</p>
              <div className="text-xs text-gray-500 leading-relaxed mt-1">
                <div>495 Jackson Street #1130</div>
                <div>Oakland, CA 94607</div>
                <div>United States</div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Managed IT, cybersecurity, and network support with remote service available.
              </p>
            </div>

            <div className="text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-semibold text-gray-900">Sales & General:</span>{" "}
                <a
                  href="mailto:sales@gntsecurity.com"
                  className="text-blue-600 hover:underline break-all"
                >
                  sales@gntsecurity.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900">Phone:</span>{" "}
                <a href="tel:+15104690947" className="text-blue-600 hover:underline">
                  (510) 469-0947
                </a>
              </p>
            </div>

            <div className="text-xs text-gray-500">
              <a href="/procezly" className="text-gray-500 hover:text-blue-600 hover:underline">
                Procezly – workflow platform built by GNT Security
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900 mb-2">
              Stay Ahead Of Outages And Security Issues
            </p>
            <p className="text-xs text-gray-600 mb-4">
              Join the mailing list for maintenance windows, security tips, and service updates from
              GNT Security.
            </p>
            {subscribed ? (
              <p className="text-sm text-green-600">Subscribed. Thank you.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GNT Security. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="/privacy-policy" className="text-gray-500 hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}