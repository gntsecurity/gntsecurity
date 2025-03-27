import { motion } from "framer-motion";
import { LayoutDashboard, Repeat, CheckCircle2 } from "lucide-react";

export default function Procezly() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-20">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Introducing <span className="text-blue-600">Procezly</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Built by GNT Security, Procezly is the cleanest way to manage recurring operations, automate compliance, and eliminate friction.
        </motion.p>
        <motion.a
          href="https://procezly.com"
          target="_blank"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Visit Procezly
        </motion.a>
      </section>

      {/* Feature Highlights */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            icon: <LayoutDashboard className="w-8 h-8 text-blue-600" />,
            title: "Visual Workflows",
            desc: "Turn chaos into clarity with modular step-based flows, all visualized in real time."
          },
          {
            icon: <Repeat className="w-8 h-8 text-blue-600" />,
            title: "Operational Templates",
            desc: "Save your best processes, reuse them with ease, and ensure everyone follows the same playbook."
          },
          {
            icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
            title: "Automated Compliance",
            desc: "Track, verify, and audit every step. Procezly turns process into protection."
          }
        ].map(({ icon, title, desc }, i) => (
          <motion.div
            key={i}
            className="bg-white border rounded-xl p-6 shadow-md space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div>{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </motion.div>
        ))}
      </section>

      {/* GNT Support Section */}
      <section className="max-w-5xl mx-auto text-center space-y-8">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Powered by GNT Security
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Behind every Procezly feature is GNT Security’s philosophy — clarity over clutter, structure over chaos, and performance without compromise.
        </motion.p>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-br from-gray-50 to-white py-20 px-4 rounded-2xl shadow-inner">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Explore Procezly Today
        </motion.h2>
        <a
          href="https://procezly.com"
          target="_blank"
          className="inline-block mt-4 px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Visit procezly.com
        </a>
      </section>
    </div>
  );
}
