import { motion } from "framer-motion";
import { Shield, Network, Users } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-24">
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-20">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About GNT Security
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          GNT Security is a security-driven Managed Service Provider focused on keeping Ohio
          businesses and homes secure, online, and supported.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-600" />
            What We Care About
          </h2>
          <p className="text-gray-700">
            Every outage, slow network, and unpatched system is a risk. Our job is to shrink that
            risk and give you a stable, secure environment that quietly does its job in the
            background.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="space-y-2">
              <p className="font-semibold text-gray-900">For Businesses</p>
              <p>• Managed workstations, servers, and networking</p>
              <p>• Security-focused standards and baselines</p>
              <p>• Clear documentation and repeatable processes</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-gray-900">For Home Users</p>
              <p>• Clean, secure home networks and Wi-Fi</p>
              <p>• Protected devices for family and work-from-home</p>
              <p>• Backup and recovery when something breaks</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Network className="w-6 h-6 text-blue-600" />
            How We Operate
          </h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>• Standardized builds for endpoints and network gear</li>
            <li>• Monitoring, alerting, and patching baked into every environment</li>
            <li>• Change control on core systems, so nothing moves without a plan</li>
            <li>• Documented diagrams and configuration baselines</li>
            <li>• Direct access to someone who actually understands your environment</li>
          </ul>
          <div className="rounded-2xl bg-gray-50 border p-4 text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-2">Service Area</p>
            <p>Serving Ohio businesses and home IT needs with remote and onsite options.</p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        {[
          {
            icon: <Users className="w-6 h-6 text-blue-600" />,
            title: "Straightforward Communication",
            body: "Plain language, clear expectations, and real answers instead of vague updates.",
          },
          {
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            title: "Security Built In",
            body: "Backups, MFA, endpoint protection, and least-privilege access are treated as defaults.",
          },
          {
            icon: <Network className="w-6 h-6 text-blue-600" />,
            title: "Stable Foundations",
            body: "Clean networks, consistent device builds, and predictable behavior make everything else easier.",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            className="bg-white border rounded-2xl p-6 shadow-md space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.body}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
