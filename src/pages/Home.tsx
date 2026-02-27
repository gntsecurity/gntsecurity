// src/pages/Home.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Server, Zap, BarChart3, Wifi, PhoneCall } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-0">
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden bg-white py-12 sm:py-16">
        <div className="absolute inset-0 pointer-events-none hero-plus-pattern opacity-40" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white to-transparent pointer-events-none" />

        <div className="gnt-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.h1
                className="gnt-h1"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                Managed IT & Cybersecurity for Businesses
              </motion.h1>

              <motion.p
                className="text-lg text-slate-700 max-w-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Fully managed IT, endpoint security, and network support with a reliable helpdesk.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 pt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <a href="mailto:sales@gntsecurity.com" className="gnt-btn-brand">
                  Email Sales
                </a>
                <Link to="/services" className="gnt-btn-secondary">
                  View Services
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.28, duration: 0.45 }}
              >
                <span className="inline-flex items-center gap-2">
                  <Zap className="h-4 w-4 text-slate-600" />
                  Responsive support
                </span>
                <span className="inline-flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-slate-600" />
                  Networks + endpoints
                </span>
                <span className="inline-flex items-center gap-2">
                  <Server className="h-4 w-4 text-slate-600" />
                  Standardized management
                </span>
              </motion.div>
            </div>

            <motion.div
              className="gnt-card-solid p-6 md:p-8"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Active Alerts</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">3</div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">This Week</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">14</div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <div className="text-xs text-slate-500">Compliance</div>
                  <div className="text-2xl font-bold text-slate-900 mt-1">98%</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-3xl border border-slate-200 bg-white px-4 py-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">KC-001</div>
                    <div className="text-sm font-semibold text-slate-900">Workstation Health Check</div>
                  </div>
                  <span className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
                    Complete
                  </span>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white px-4 py-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">KC-002</div>
                    <div className="text-sm font-semibold text-slate-900">Backup Verification</div>
                  </div>
                  <span className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
                    Pending
                  </span>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white px-4 py-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">KC-003</div>
                    <div className="text-sm font-semibold text-slate-900">Firewall Review</div>
                  </div>
                  <span className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
                    Complete
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              icon: <ShieldCheck className="h-6 w-6 text-slate-900" />,
              title: "Security-First",
              desc: "EDR, patching, hardening, and monitoring baked in.",
            },
            {
              icon: <Server className="h-6 w-6 text-slate-900" />,
              title: "Managed IT",
              desc: "Devices, servers, and network gear maintained and monitored.",
            },
            {
              icon: <Wifi className="h-6 w-6 text-slate-900" />,
              title: "Reliable Networks",
              desc: "Wi-Fi, VPN, routing, and secure remote access configured right.",
            },
            {
              icon: <Zap className="h-6 w-6 text-slate-900" />,
              title: "Helpdesk",
              desc: "Fast support for day-to-day issues and escalations.",
            },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="gnt-card-solid p-6 space-y-3"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
            >
              <div>{icon}</div>
              <h3 className="gnt-h3">{title}</h3>
              <p className="text-slate-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="gnt-h2">What We Manage</h2>
            <p className="text-slate-700">
              One point of contact for devices, users, security, backups, networking, and cloud.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
              <ul className="space-y-2">
                <li>• Monitoring + alerting</li>
                <li>• EDR + antivirus</li>
                <li>• Patch management</li>
                <li>• Onboarding/offboarding</li>
                <li>• Email + identity</li>
              </ul>
              <ul className="space-y-2">
                <li>• Firewalls + Wi-Fi</li>
                <li>• VPN + remote access</li>
                <li>• Backups + recovery</li>
                <li>• Lifecycle planning</li>
                <li>• Remote work setups</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="gnt-card-solid p-6 space-y-4"
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-slate-900" />
              <h3 className="text-xl font-semibold text-slate-900">Always-On Visibility</h3>
            </div>
            <p className="text-slate-700 text-sm">
              Centralized monitoring catches issues early and keeps systems consistent.
            </p>
            <div className="text-sm text-slate-700 space-y-2">
              <p className="font-semibold text-slate-900">Built for businesses</p>
              <p>Offices, retail, warehouses, remote staff, and multi-site setups.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="text-center space-y-5">
          <motion.h2
            className="gnt-h2"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to hand off IT and security?
          </motion.h2>
          <p className="text-slate-700 max-w-3xl mx-auto">
            Tell us what you have and what’s breaking. We’ll map out a plan that covers devices, users,
            security, backups, and connectivity.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:sales@gntsecurity.com" className="gnt-btn-brand px-7 py-3 text-base">
              Email Sales
            </a>
            <a href="tel:+15104690947" className="gnt-btn-secondary px-7 py-3 text-base">
              <PhoneCall className="h-5 w-5 text-slate-900" />
              Call (510) 469-0947
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}