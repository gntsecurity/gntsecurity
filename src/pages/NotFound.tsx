import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Skull,
  Zap,
  Shield,
  AlertTriangle,
  Home,
  Github,
  ArrowRight,
  Terminal,
  Bug,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-slate-50 shadow-[0_0_80px_rgba(37,99,235,0.8)]">
        <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 -bottom-40 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="relative grid gap-10 p-8 md:grid-cols-[1.1fr,0.9fr] md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/40 px-4 py-1 text-xs font-mono tracking-widest uppercase text-emerald-300">
              <AlertTriangle className="h-4 w-4" />
              Critical routing anomaly
            </div>

            <div className="flex items-baseline gap-4">
              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-6xl font-black tracking-tight text-transparent drop-shadow-[0_0_25px_rgba(45,212,191,0.8)]">
                404
              </span>
              <span className="text-sm font-mono uppercase tracking-[0.35em] text-slate-300">
                Resource Not Found
              </span>
            </div>

            <p className="max-w-xl text-sm md:text-base text-slate-200/90">
              You just breached outside the mapped perimeter. This route doesn&apos;t exist in
              any table, cache, or config. Either the link rotted, or you discovered a new
              level of the network.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-700/80 bg-black/40 p-4 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur">
                <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-slate-400">
                  <Terminal className="h-4 w-4 text-emerald-300" />
                  Crash Dump
                </div>
                <div className="space-y-1 font-mono text-[11px] leading-relaxed text-emerald-200/90">
                  <p>route: /unknown/void</p>
                  <p>status: 404_ROUTE_NOT_MAPPED</p>
                  <p>origin: edge-lb.gntsecurity.com</p>
                  <p>trace: nav_stack › router › null</p>
                  <p>mitigation: manual operator intervention</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-700/80 bg-black/35 p-4 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur">
                <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-slate-400">
                  <Bug className="h-4 w-4 text-fuchsia-300" />
                  Possible Causes
                </div>
                <ul className="space-y-1 text-sm text-slate-200/90">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Typo in the URL or corrupted link
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Legacy route retired from production
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                    You are actively penetration-testing my navigation
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(52,211,153,0.9)] transition hover:bg-emerald-300"
              >
                <Home className="h-4 w-4" />
                Take me home
              </Link>

              <a
                href="https://github.com/gntsecurity"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-black/40 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-emerald-400/80 hover:text-emerald-200"
              >
                <Github className="h-4 w-4" />
                View the source
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-transparent bg-slate-800/80 px-4 py-2 text-xs font-mono uppercase tracking-wide text-slate-100 transition hover:bg-slate-700/80"
              >
                <Shield className="h-4 w-4 text-emerald-300" />
                Report this anomaly
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex flex-col justify-between gap-6"
          >
            <div className="relative rounded-2xl border border-slate-700/80 bg-black/40 p-5 backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  gnt-firewall
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="h-3 w-3 text-yellow-300" />
                  live
                </span>
              </div>

              <div className="space-y-2 font-mono text-[11px] leading-relaxed text-slate-100">
                <p className="flex items-center justify-between">
                  <span className="text-slate-400">[rule]</span>
                  <span className="text-emerald-300">DROP</span>
                  <span className="text-slate-300">/blackhole/404</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-slate-400">[src]</span>
                  <span className="text-slate-200">client</span>
                  <span className="text-slate-400">unmapped-route</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-slate-400">[action]</span>
                  <span className="text-emerald-300">REROUTE</span>
                  <span className="text-slate-200">safe-paths-only</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-slate-400">[hint]</span>
                  <span className="text-sky-300">
                    try /, /about, /services, /procezly, /contact
                  </span>
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700/80 bg-black/30 p-5 backdrop-blur">
              <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-slate-400">
                <Skull className="h-4 w-4 text-rose-300" />
                404 Survival Kit
              </div>
              <div className="space-y-3 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20">
                    <Shield className="h-4 w-4 text-emerald-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">
                      Your systems are still safe
                    </p>
                    <p className="text-xs text-slate-300">
                      This is just a navigation fault, not a breach. The only thing compromised
                      is that URL.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/20">
                    <Zap className="h-4 w-4 text-sky-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">
                      Use the primary jump points
                    </p>
                    <p className="text-xs text-slate-300">
                      Navigate via the main menu to stay inside the supported topology and avoid
                      dead routes like this one.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-500/20">
                    <ArrowRight className="h-4 w-4 text-fuchsia-300" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">
                      Or keep exploring the edges
                    </p>
                    <p className="text-xs text-slate-300">
                      If you keep finding paths like this, reach out. That means you&apos;re
                      thinking like an engineer, not just a user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}SS