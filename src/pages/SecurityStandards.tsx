import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  HardDrive,
  Wifi,
  ClipboardList,
  AlertTriangle,
} from "lucide-react";

export default function SecurityStandards() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          IT Security Standards & Baselines
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          These are the baseline security standards GNT Security uses when bringing systems
          under management. Individual environments may add stricter controls as needed.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">Endpoint Security</h2>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Supported OS versions only</li>
            <li>• Centralized endpoint protection</li>
            <li>• Enforced local encryption where possible</li>
            <li>• Screen lock and inactivity timeouts</li>
            <li>• Regular patching for OS and key apps</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Lock className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">Access Control</h2>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Named user accounts, no shared logins where avoidable</li>
            <li>• Least-privilege access to systems and data</li>
            <li>• Administrative access monitored and limited</li>
            <li>• Role-based access where the platform supports it</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <KeyRound className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">Identity & Authentication</h2>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Strong password policies in supported systems</li>
            <li>• Multi-factor authentication where available</li>
            <li>• Removal of accounts when staff depart</li>
            <li>• Centralized identity where appropriate</li>
          </ul>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className="bg-gray-50 border rounded-2xl p-6 space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <HardDrive className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Backup & Recovery</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Defined backup targets for key data and systems</li>
            <li>• Mix of local and remote backup where appropriate</li>
            <li>• Regular verification that backups are successful</li>
            <li>• Periodic test restores of representative data</li>
            <li>• Recovery objectives agreed for critical workloads</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Wifi className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Network & Perimeter</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Separate networks for trusted devices and guests where possible</li>
            <li>• Limited exposure of internal services to the internet</li>
            <li>• Use of secure remote access methods</li>
            <li>• Documented network layout and addressing</li>
            <li>• Review of open ports and forwarding rules</li>
          </ul>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto bg-white border rounded-2xl p-6 shadow-sm space-y-5 mb-16">
        <div className="flex items-center gap-3">
          <ClipboardList className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold">Operational Practices</h2>
        </div>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Changes to critical systems are planned and documented</li>
          <li>• Monitoring alerts are reviewed rather than ignored</li>
          <li>• New software and services are evaluated before wide rollout</li>
          <li>• Decommissioned devices and drives are wiped or destroyed</li>
          <li>• Standard build templates are used where possible</li>
        </ul>
        <div className="flex items-center gap-3 pt-2">
          <AlertTriangle className="w-5 h-5 text-blue-600" />
          <p className="text-xs text-gray-600">
            These baselines are a floor, not a ceiling. Some industries or environments
            may require stricter controls, which can be added on top of this foundation.
          </p>
        </div>
      </section>
    </div>
  );
}
