import { motion } from "framer-motion";
import { Cloud, ServerCog, Shield, Wrench, Cpu, KeyRound } from "lucide-react";

export default function Services() {
  return (
    <div className="space-y-24">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Infrastructure. Security. Precision.
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          GNT Security delivers advanced systems engineering and modern infrastructure support — built for reliability, control, and speed.
        </motion.p>
      </section>

      {/* Service Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: <ServerCog className="w-8 h-8 text-blue-600" />,
            title: "Network Design",
            desc: "From foundational cabling to redundant, scalable architecture — we design your backbone like it’s our own."
          },
          {
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: "Security Systems",
            desc: "Camera setups, access control, alarm integrations — all secured with enterprise-grade protocols."
          },
          {
            icon: <Cloud className="w-8 h-8 text-blue-600" />,
            title: "Cloud Infrastructure",
            desc: "AWS, GCP, and hybrid models engineered for performance, visibility, and cost control."
          },
          {
            icon: <Wrench className="w-8 h-8 text-blue-600" />,
            title: "Automation & Monitoring",
            desc: "We automate everything that can be automated — with alerting, recovery, and insight built in."
          },
          {
            icon: <Cpu className="w-8 h-8 text-blue-600" />,
            title: "Edge Systems",
            desc: "Deploy compute power where it’s needed most — at the edge. Lightweight, secure, and fast."
          },
          {
            icon: <KeyRound className="w-8 h-8 text-blue-600" />,
            title: "Zero Trust Consulting",
            desc: "We implement and advise on true zero-trust environments. Internal protection, verified identity, and encryption by default."
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

      {/* Final CTA */}
      <section className="text-center bg-gradient-to-br from-gray-50 to-white py-20 px-4 rounded-2xl shadow-inner">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Build with GNT Security
        </motion.h2>
        <a
          href="/contact"
          className="inline-block mt-4 px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Schedule a Consultation
        </a>
      </section>
    </div>
  );
}
