import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  AlertTriangle,
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
          className="text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Clear, predictable support commitments so you always know what to expect from your IT partner.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div
          className="p-8 border rounded-2xl shadow-sm bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Clock className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Response Targets</h2>
          <p className="text-gray-600">
            Defined response windows based on severity: from immediate engagement on critical outages to same-day
            response on standard requests.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl shadow-sm bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Shield className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Coverage & Scope</h2>
          <p className="text-gray-600">
            End-user devices, servers, networking, and core line-of-business services are covered under your SLA with
            clearly defined responsibilities.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl shadow-sm bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AlertTriangle className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Priority Handling</h2>
          <p className="text-gray-600">
            Issues affecting many users or critical services are automatically escalated and handled before lower
            priority requests.
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
          <h2 className="text-2xl font-semibold">Service Availability</h2>
          <p className="text-gray-600">
            Our SLAs distinguish between standard business hours support and after-hours emergency response, ensuring
            you always know when and how to reach us.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Business hours coverage for routine support and changes</li>
            <li>• After-hours on-call availability for critical incidents</li>
            <li>• Planned maintenance windows communicated in advance</li>
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
            <Server className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Infrastructure Uptime</h3>
              <p className="text-gray-600">
                Monitoring and alerting on your servers, firewalls, and core services with documented uptime targets
                and remediation workflows.
              </p>
            </div>
          </div>

          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <Wifi className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Network Reliability</h3>
              <p className="text-gray-600">
                Support for WAN, LAN, and secure remote access, coordinated with your ISPs and upstream vendors when
                required.
              </p>
            </div>
          </div>

          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <Database className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Backup & Recovery</h3>
              <p className="text-gray-600">
                Defined recovery point and recovery time objectives (RPO/RTO) for key systems, with regular test
                restores documented.
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
          <h2 className="text-2xl font-semibold mb-4">How to Engage Support</h2>
          <p className="text-gray-600 mb-4">
            Multiple channels are available for opening tickets, escalating urgent issues, and following up on
            existing requests.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start">
              <PhoneCall className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">
                  Call the support line for urgent incidents or outages that require immediate attention.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Mail className="w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold">Email / Portal</h3>
                <p className="text-gray-600">
                  Submit requests and non-urgent issues through the ticketing portal or support email for proper
                  tracking and prioritization.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
