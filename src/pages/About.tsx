import { motion } from "framer-motion";
import { Shield, Network, Users } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-0">
      <section className="py-12 sm:py-16 text-center space-y-6">
        <motion.h1
          className="gnt-h1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About GNT Security
        </motion.h1>
        <motion.p
          className="text-lg text-slate-700 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          GNT Security is a security-driven Managed Service Provider focused on keeping businesses secure, online, and supported with proactive management and clear processes.
        </motion.p>
      </section>

      <section className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-slate-900">
              <Shield className="h-6 w-6 text-slate-900" />
              What We Care About
            </h2>
            <p className="text-slate-700">
              Every outage, slow network, and unpatched system is a risk. Our job is to shrink that
              risk and give you a stable, secure environment that quietly does its job in the
              background.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="space-y-2">
                <p className="font-semibold text-slate-900">For Businesses</p>
                <p>• Managed workstations, servers, and networking</p>
                <p>• Security-focused standards and baselines</p>
                <p>• Clear documentation and repeatable processes</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-slate-900">For Leadership</p>
                <p>• Roadmaps, lifecycle planning, and budgeting support</p>
                <p>• Vendor coordination and escalation management</p>
                <p>• Security posture reviews and policy alignment</p>
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
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-slate-900">
              <Network className="h-6 w-6 text-slate-900" />
              How We Operate
            </h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>• Standardized builds for endpoints and network gear</li>
              <li>• Monitoring, alerting, and patching baked into every environment</li>
              <li>• Change control on core systems, so nothing moves without a plan</li>
              <li>• Documented diagrams and configuration baselines</li>
              <li>• Direct access to someone who actually understands your environment</li>
            </ul>
            <div className="gnt-card-solid p-6 text-sm text-slate-700">
              <p className="font-semibold text-slate-900 mb-2">Service Area</p>
              <p>
                High availability in <span className="font-semibold text-slate-900">Florida</span>,{" "}
                <span className="font-semibold text-slate-900">Michigan</span>,{" "}
                <span className="font-semibold text-slate-900">Ohio</span>, and{" "}
                <span className="font-semibold text-slate-900">Texas</span> within the United States.
              </p>
              <p className="mt-2">
                Remote and onsite support available nationwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-6 w-6 text-slate-900" />,
              title: "Straightforward Communication",
              body: "Plain language, clear expectations, and real answers instead of vague updates.",
            },
            {
              icon: <Shield className="h-6 w-6 text-slate-900" />,
              title: "Security Built In",
              body: "Backups, MFA, endpoint protection, and least-privilege access are treated as defaults.",
            },
            {
              icon: <Network className="h-6 w-6 text-slate-900" />,
              title: "Stable Foundations",
              body: "Clean networks, consistent device builds, and predictable behavior make everything else easier.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="gnt-card-solid p-6 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div>{item.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-700 text-sm">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}