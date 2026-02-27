import { motion } from "framer-motion";
import { Shield, Laptop2, Wifi, AlertTriangle, UserX, CheckCircle2 } from "lucide-react";

export default function AcceptableUse() {
  return (
    <div className="space-y-0">
      <section className="py-12 sm:py-16 text-center space-y-6">
        <motion.h1
          className="gnt-h1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Acceptable Use & Device Requirements
        </motion.h1>
        <motion.p
          className="text-lg text-slate-700 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          These guidelines explain how supported devices should be used and what conditions are
          required for GNT Security to provide reliable, secure service.
        </motion.p>
      </section>

      <section className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            className="gnt-card-solid p-6 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <Laptop2 className="h-6 w-6 text-slate-900" />
              <h2 className="text-xl font-semibold text-slate-900">Supported Devices</h2>
            </div>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Actively used workstations, laptops, and business devices</li>
              <li>• Systems running supported operating systems</li>
              <li>• Devices enrolled in monitoring and security tools</li>
              <li>• Hardware kept reasonably up to date and maintained</li>
            </ul>
          </motion.div>

          <motion.div
            className="gnt-card-solid p-6 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <Wifi className="h-6 w-6 text-slate-900" />
              <h2 className="text-xl font-semibold text-slate-900">Network Requirements</h2>
            </div>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Stable internet connection for remote management</li>
              <li>• Network hardware configured to allow secure access</li>
              <li>• Reasonable Wi-Fi signal where devices operate</li>
              <li>• No unauthorized routers or access points added</li>
            </ul>
          </motion.div>

          <motion.div
            className="gnt-card-solid p-6 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-slate-900" />
              <h2 className="text-xl font-semibold text-slate-900">Security Baseline</h2>
            </div>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Antivirus or endpoint protection enabled</li>
              <li>• Automatic updates active where appropriate</li>
              <li>• Local account protection (PIN/password) in place</li>
              <li>• No bypassing of configured security controls</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="gnt-card p-6 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-slate-900" />
              <h2 className="text-xl font-semibold text-slate-900">Acceptable Use Guidelines</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Use devices in line with business or approved personal use</li>
              <li>• Follow provided instructions for backups and updates</li>
              <li>• Report unusual behavior, pop-ups, or warnings quickly</li>
              <li>• Ask before installing new system-level utilities or tools</li>
              <li>• Keep work data on approved storage locations when possible</li>
            </ul>
          </motion.div>

          <motion.div
            className="gnt-card-solid p-6 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <UserX className="h-6 w-6 text-slate-900" />
              <h2 className="text-xl font-semibold text-slate-900">Examples Of Unsupported Use</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Repeatedly disabling or removing security tools</li>
              <li>• Installing pirated or clearly unsafe software</li>
              <li>• Making unmanaged changes to networking equipment</li>
              <li>• Sharing accounts or passwords between users</li>
              <li>• Overriding backup or retention settings without coordination</li>
            </ul>
            <p className="text-xs text-slate-500">
              These actions can reduce reliability and security. Work related to reversing or
              repairing the impact may be treated as billable remediation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="gnt-card-solid p-6 space-y-5">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-4 w-4 text-slate-600" />
            <h2 className="text-xl font-semibold text-slate-900">Device Health And Replacement</h2>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Severely outdated or unstable hardware may be flagged for replacement.</li>
            <li>• Devices that cannot run supported security tools may be limited in coverage.</li>
            <li>• Critical roles should not rely on hardware beyond a reasonable service life.</li>
            <li>• Recommendations will be provided when a device falls below acceptable standards.</li>
          </ul>
          <p className="text-xs text-slate-500">
            These guidelines are meant to keep systems supportable and secure. Specific terms and
            enforcement are defined in your individual service agreement.
          </p>
        </div>
      </section>
    </div>
  );
}
