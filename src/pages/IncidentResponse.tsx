import { motion } from "framer-motion";
import {
  AlertTriangle,
  Shield,
  Clock,
  PhoneCall,
  Mail,
  FileWarning,
  Activity,
  KeyRound,
} from "lucide-react";

export default function IncidentResponse() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Incident Response Agreement
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          This page explains how GNT Security handles security incidents, outages, and
          emergency situations, and what is covered under managed services versus
          separate billable work.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-10">
        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">What Counts As An Incident</h2>
          </div>
          <p className="text-sm text-gray-700">
            An incident is any event that threatens the confidentiality, integrity, or
            availability of systems or data, or significantly interrupts normal
            operations.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Suspected or confirmed malware or ransomware activity</li>
            <li>• Unauthorized access to accounts, devices, or data</li>
            <li>• Major outage of core systems or network infrastructure</li>
            <li>• Data loss or corruption affecting critical information</li>
            <li>• Security misconfigurations that expose systems to risk</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-50 border rounded-2xl p-6 space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-semibold">How To Report An Incident</h2>
          </div>
          <p className="text-sm text-gray-700">
            Incidents should be reported as soon as they are noticed. Include as many
            details as possible, but do not delay reporting while you gather more
            information.
          </p>
          <div className="space-y-1 text-sm text-gray-800">
            <p>
              Phone:{" "}
              <a href="tel:+19376715597" className="text-blue-600 hover:underline">
                937.671.5597
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:sales@gntsecurity.com"
                className="text-blue-600 hover:underline break-all"
              >
                sales@gntsecurity.com
              </a>
            </p>
          </div>
          <p className="text-xs text-gray-500">
            If the incident involves suspected account compromise, do not email from the
            suspected account. Use a different address or phone call instead.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Response For Managed Clients</h2>
          </div>
          <p className="text-sm text-gray-700">
            For environments covered under a managed service agreement, incident response
            starts as part of the service using the same tools and access used to manage
            day-to-day operations.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Rapid remote assessment of affected systems</li>
            <li>• Isolation or containment of compromised devices where possible</li>
            <li>• Use of existing monitoring, logging, and backup tools</li>
            <li>• Prioritization based on impact and risk</li>
            <li>• Communication of findings and next steps in plain language</li>
          </ul>
          <p className="text-xs text-gray-500">
            Specific timeframes and services are governed by your managed service
            agreement and SLA.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-50 border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <FileWarning className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Billable Incident Work</h2>
          </div>
          <p className="text-sm text-gray-700">
            Some incident-related tasks fall outside normal managed service scope and may
            be billed separately.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Work on systems not enrolled under management</li>
            <li>• Forensics and deep log analysis beyond standard review</li>
            <li>• Large-scale rebuilds or redesigns after an incident</li>
            <li>• Emergency work outside agreed service hours if not covered</li>
            <li>• Legal, compliance, or third-party coordination beyond IT scope</li>
          </ul>
          <p className="text-xs text-gray-500">
            When possible, billable incident work will be discussed and approved before
            major time is spent, except in situations where immediate action is required
            to prevent further harm.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pb-20">
        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Typical Response Steps</h2>
          </div>
          <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
            <li>Confirm incident details and impact with the reporting contact.</li>
            <li>Stabilize systems by isolating or disabling affected components.</li>
            <li>Identify likely cause and entry point using available data.</li>
            <li>Restore services using clean backups or known-good states.</li>
            <li>Implement targeted changes to reduce the chance of repeat incidents.</li>
            <li>Summarize findings and changes in clear language.</li>
          </ol>
        </motion.div>

        <motion.div
          className="bg-gray-50 border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <KeyRound className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Client Responsibilities During Incidents</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Report incidents immediately, even if details are incomplete.</li>
            <li>• Do not delete logs, alerts, or suspicious emails before review.</li>
            <li>• Avoid making major configuration changes without coordination.</li>
            <li>• Provide contact information for decision makers if fast approval is needed.</li>
            <li>• Follow post-incident recommendations to reduce future risk.</li>
          </ul>
          <p className="text-xs text-gray-500">
            Good incident outcomes depend on fast reporting, clear communication, and
            coordinated response between GNT Security and the client.
          </p>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p className="font-semibold text-gray-900">Incident Contact:</p>
            <p className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-blue-600" />
              <a href="tel:+19376715597" className="text-blue-600 hover:underline">
                937.671.5597
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <a
                href="mailto:sales@gntsecurity.com"
                className="text-blue-600 hover:underline break-all"
              >
                sales@gntsecurity.com
              </a>
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
