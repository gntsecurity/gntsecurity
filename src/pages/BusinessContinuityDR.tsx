import { motion } from "framer-motion";
import {
  Shield,
  RefreshCw,
  Server,
  Cloud,
  Database,
  AlertTriangle,
  Clock,
  FileText,
} from "lucide-react";

export default function BusinessContinuityDR() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Business Continuity &amp; Disaster Recovery
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Keeping your business online, recoverable, and resilient when the unexpected happens.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Shield className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Risk-Aligned Strategy</h2>
          <p className="text-gray-700">
            We map recovery objectives to the real risks your organization faces, so investments go where they matter.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RefreshCw className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Documented Plans</h2>
          <p className="text-gray-700">
            Clear, repeatable response playbooks for outages, ransomware, and site-wide incidents, maintained with you.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Clock className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Defined RPO &amp; RTO</h2>
          <p className="text-gray-700">
            Recovery Time and Recovery Point Objectives set by system, so expectations are aligned before an incident.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold">Backup &amp; Recovery Design</h2>
          <p className="text-gray-700">
            We design layered backups that match your compliance, retention, and uptime requirements.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Image-level backups for servers and key infrastructure</li>
            <li>• File-level and SaaS backups for critical data sets</li>
            <li>• Off-site and immutable storage for ransomware resilience</li>
            <li>• Regular test restores with reporting and verification</li>
          </ul>
        </motion.div>

        <motion.div
          className="grid gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <Server className="h-6 w-6 mt-1 text-slate-900" />
            <div>
              <h3 className="font-semibold mb-1">On-Premises Workloads</h3>
              <p className="text-gray-700">
                Protection for domain controllers, file servers, line-of-business apps, and hypervisors.
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <Cloud className="h-6 w-6 mt-1 text-slate-900" />
            <div>
              <h3 className="font-semibold mb-1">Cloud &amp; SaaS</h3>
              <p className="text-gray-700">
                Coverage for Microsoft 365, critical SaaS platforms, and hybrid environments.
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <Database className="h-6 w-6 mt-1 text-slate-900" />
            <div>
              <h3 className="font-semibold mb-1">Data Retention</h3>
              <p className="text-gray-700">
                Retention policies that align with regulatory and business needs without unnecessary storage cost.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto pb-20">
        <motion.div
          className="p-8 border rounded-2xl bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4 mb-4">
            <AlertTriangle className="h-6 w-6 mt-1 text-slate-900" />
            <div>
              <h2 className="text-2xl font-semibold">When an Incident Happens</h2>
              <p className="text-gray-700">
                During a major disruption, our focus is restoring operations in a safe, structured way.
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Rapid assessment, triage, and communication with key stakeholders</li>
            <li>• Containment of the threat or outage to limit impact</li>
            <li>• Recovery of services according to agreed priorities and RTOs</li>
            <li>• Post-incident review, root-cause, and improvement actions</li>
          </ul>
          <div className="flex items-start gap-3">
            <FileText className="w-6 h-6 mt-1" />
            <p className="text-gray-700">
              Your continuity and DR plans are living documents, updated as your systems, locations, and risk profile
              change.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
