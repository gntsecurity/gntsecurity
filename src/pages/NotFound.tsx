import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  Bug,
  Github,
  Home,
  Shield,
  Skull,
  Terminal,
  Zap,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-140px)] bg-slate-950 text-slate-50 flex items-stretch justify-center">
      <div className="relative w-full max-w-6xl mx-auto px-4 py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.4),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.45),_transparent_55%)]" />
        </div>

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr,1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/50 px-4 py-1 text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-300 shadow-[0_0_30px_rgba(45,212,191,0.7)]">
              <AlertTriangle className="h-4 w-4" />
              Critical 404: Perimeter Breached
            </div>

            <div className="rounded-[34px] border border-slate-700/80 bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-sky-950/95 p-6 shadow-[0_0_90px_rgba(59,130,246,0.9)]">
              <div className="mb-5 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  gnt-sec.edge.router
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-3 w-3 text-yellow-300" />
                  status: live
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
                <div className="space-y-5">
                  <div className="relative overflow-hidden rounded-3xl bg-slate-950/70 p-6 ring-1 ring-slate-800/80">
                    <div className="pointer-events-none absolute inset-0 opacity-40">
                      <div className="h-full w-full bg-[radial-gradient(circle_at_0_0,_rgba(56,189,248,0.7),_transparent_55%),radial-gradient(circle_at_100%_100%,_rgba(129,140,248,0.7),_transparent_55%)]" />
                    </div>
                    <div className="relative space-y-2">
                      <div className="flex items-baseline gap-3">
                        <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-7xl font-black tracking-tight text-transparent leading-none drop-shadow-[0_0_35px_rgba(45,212,191,0.9)]">
                          404
                        </span>
                        <span className="text-xs font-mono uppercase tracking-[0.35em] text-slate-300">
                          resource not found
                        </span>
                      </div>
                      <p className="max-w-xl text-sm text-slate-200/90">
                        The path you dialed does not exist in any routing table. You have left
                        the documented topology and entered dark space. This is where dead
                        links, deprecated endpoints, and bold explorers end up.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-4 font-mono text-[11px] leading-relaxed text-emerald-100 shadow-[0_0_40px_rgba(16,185,129,0.6)]">
                      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wide text-emerald-300">
                        <Terminal className="h-4 w-4" />
                        live crash dump
                      </div>
                      <p>route: /unmapped/{`{unknown}`}</p>
                      <p>status: 404_ROUTE_NOT_MAPPED</p>
                      <p>origin: edge-lb.gntsecurity.com</p>
                      <p>trace: nav_stack › router › null</p>
                      <p>mitigation: operator reroute required</p>
                    </div>

                    <div className="rounded-2xl border border-fuchsia-500/40 bg-fuchsia-950/40 p-4 shadow-[0_0_40px_rgba(217,70,239,0.6)]">
                      <div className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-fuchsia-300">
                        <Bug className="h-4 w-4" />
                        probable causes
                      </div>
                      <ul className="space-y-1 text-sm text-slate-100">
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Off-by-one character in the URL
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                          Route retired and scrubbed from production
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                          You are stress-testing my navigation on purpose
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4 backdrop-blur">
                    <div className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wide text-slate-400">
                      <Skull className="h-4 w-4 text-rose-300" />
                      404 survival brief
                    </div>
                    <div className="space-y-3 text-sm text-slate-200">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                          <Shield className="h-4 w-4 text-emerald-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-50">
                            Your perimeter is intact
                          </p>
                          <p className="text-xs text-slate-300">
                            This is a routing anomaly, not a security incident. Nothing breached
                            except the path you tried to hit.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20">
                          <Zap className="h-4 w-4 text-sky-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-50">
                            Use the hardened jump points
                          </p>
                          <p className="text-xs text-slate-300">
                            Pivot through the primary routes in the nav bar to stay inside the
                            supported topology and avoid ghost endpoints like this one.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-500/20">
                          <ArrowRight className="h-4 w-4 text-fuchsia-300" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-50">
                            Or keep poking the dark corners
                          </p>
                          <p className="text-xs text-slate-300">
                            If you keep finding weird paths like this, reach out. That means you
                            are thinking like an engineer, not just a user.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 p-4 backdrop-blur">
                    <div className="mb-3 text-xs font-mono uppercase tracking-wide text-slate-400">
                      quick extraction
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_35px_rgba(52,211,153,0.9)] transition hover:bg-emerald-300"
                      >
                        <Home className="h-4 w-4" />
                        Take me home
                      </Link>

                      <a
                        href="https://github.com/gntsecurity"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-black/50 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-emerald-400/80 hover:text-emerald-200"
                      >
                        <Github className="h-4 w-4" />
                        View the source
                      </a>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-900/80 px-4 py-2 text-xs font-mono uppercase tracking-wide text-slate-100 transition hover:border-sky-400/80 hover:text-sky-200"
                      >
                        <Shield className="h-4 w-4 text-emerald-300" />
                        Report this anomaly
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative h-full w-full max-w-md">
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-fuchsia-500/30 blur-3xl" />
              <div className="relative rounded-[32px] border border-slate-700/80 bg-slate-950/90 p-6 shadow-[0_0_80px_rgba(37,99,235,0.9)] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="h-full w-full bg-[linear-gradient(to_right,_rgba(148,163,184,0.25)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(148,163,184,0.25)_1px,_transparent_1px)] bg-[size:28px_28px]" />
                </div>

                <div className="relative space-y-5">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>gntsecurity::404_monitor</span>
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                      streaming
                    </span>
                  </div>

                  <div className="space-y-2 font-mono text-[11px] leading-relaxed text-slate-100">
                    <p className="text-emerald-300">
                      [01] anomaly detected › unmapped route
                    </p>
                    <p className="text-sky-300">
                      [02] threat model › low risk navigation fault
                    </p>
                    <p className="text-fuchsia-300">
                      [03] suggested action › reroute user to safe entrypoints
                    </p>
                    <p className="text-slate-300">
                      [04] logging › request fingerprint stored for analysis
                    </p>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-700/80 bg-black/60 p-4">
                    <div className="mb-2 text-xs font-mono uppercase tracking-wide text-slate-400">
                      safe entrypoints
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px]">
                      <Link
                        to="/"
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-slate-100 hover:bg-emerald-500/20"
                      >
                        /
                      </Link>
                      <Link
                        to="/about"
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-slate-100 hover:bg-emerald-500/20"
                      >
                        /about
                      </Link>
                      <Link
                        to="/services"
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-slate-100 hover:bg-emerald-500/20"
                      >
                        /services
                      </Link>
                      <Link
                        to="/procezly"
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-slate-100 hover:bg-emerald-500/20"
                      >
                        /procezly
                      </Link>
                      <Link
                        to="/contact"
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-slate-100 hover:bg-emerald-500/20"
                      >
                        /contact
                      </Link>
                      <Link
                        to="/GitHub"
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-slate-100 hover:bg-emerald-500/20"
                      >
                        /GitHub
                      </Link>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono text-slate-500">
                    If you are seeing this often, something upstream is stale. Patch the links,
                    redeploy, and keep the perimeter clean.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
