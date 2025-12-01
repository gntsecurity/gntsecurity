import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  AlertTriangle,
  Wrench,
  Server,
  Wifi,
  Database,
  PhoneCall,
  Mail,
} from "lucide-react";

export default function SLA() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Service Level Agreement
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          This Service Level Agreement defines how GNT Security delivers managed IT and
          cybersecurity services, how fast we respond, and what you can expect during
          normal operations and incidents.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className="space-y-6 bg-white border rounded-2xl p-6 shadow-sm"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Support Hours</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Standard support: Monday–Friday, 8:00 AM–5:00 PM ET</li>
            <li>• After-hours support: best-effort, incident-based response</li>
            <li>• Emergency incidents can be escalated by phone at any time</li>
          </ul>

          <div className="pt-4">
            <div className="flex items-center gap-3 mb-2">
              <PhoneCall className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-800 font-semibold">
                Phone: 937.671.5597
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-800 font-semibold break-all">
                Sales & general: sales@gntsecurity.com
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6 bg-gray-50 border rounded-2xl p-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Priority Levels & Targets</h2>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-semibold text-gray-900">Priority 1 – Critical</p>
              <p>System-wide outage, security incident, or business halted.</p>
              <p>Target: response within 1 hour, work continuously until stable.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Priority 2 – High</p>
              <p>Major degradation, multiple users impacted, no simple workaround.</p>
              <p>Target: response within 2 business hours, resolution as soon as possible.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Priority 3 – Standard</p>
              <p>Single-user issues, requests, or minor degradation.</p>
              <p>Target: response within 1 business day.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Priority 4 – Scheduled Work</p>
              <p>Planned changes, enhancements, audits, and project tasks.</p>
              <p>Target: scheduled by mutual agreement.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className="space-y-5 bg-white border rounded-2xl p-6 shadow-sm"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Included Services</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Monitoring of covered endpoints, servers, and core network devices</li>
            <li>• Security patching and OS updates on an agreed schedule</li>
            <li>• Endpoint protection deployment and health monitoring</li>
            <li>• Remote support for covered systems</li>
            <li>• Backup monitoring for enrolled devices and workloads</li>
            <li>• Documentation of network diagrams and key configurations</li>
            <li>• Advice on security posture and improvement roadmap</li>
          </ul>
        </motion.div>

        <motion.div
          className="space-y-5 bg-gray-50 border rounded-2xl p-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Out-of-Scope Items</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Hardware costs, licensing, and third-party subscription fees</li>
            <li>• Work on systems not enrolled under management</li>
            <li>• Recovery from issues caused by unsupported changes or software</li>
            <li>• Major projects, redesigns, or relocations without a project agreement</li>
            <li>• Onsite visits outside the normal service area without prior approval</li>
          </ul>
          <p className="text-xs text-gray-500">
            These items can be handled as separate, quoted project work or time-and-materials
            services.
          </p>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pb-20">
        <motion.div
          className="space-y-5 bg-white border rounded-2xl p-6 shadow-sm"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Server className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Maintenance & Changes</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Routine maintenance windows are scheduled outside core business hours when possible.</li>
            <li>• Servers, firewalls, and critical systems follow a change plan before updates.</li>
            <li>• Emergency changes may be implemented immediately to protect stability or security.</li>
            <li>• Changes are documented in environment notes and diagrams after completion.</li>
          </ul>
        </motion.div>

        <motion.div
          className="space-y-5 bg-gray-50 border rounded-2xl p-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Wifi className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Client Responsibilities</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Provide timely access to systems, locations, and staff as needed.</li>
            <li>• Notify GNT Security of planned changes that may impact managed systems.</li>
            <li>• Use supported hardware and software wherever possible.</li>
            <li>• Report incidents and suspicious activity as soon as they are noticed.</li>
            <li>• Maintain valid contracts and payments so services remain active.</li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <Database className="w-5 h-5 text-blue-600" />
            <p className="text-xs text-gray-600">
              Reliable outcomes depend on both sides keeping systems documented, consistent,
              and supported.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
