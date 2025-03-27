import { motion } from "framer-motion";
import { ShieldCheck, Server, Zap, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="pt-24 text-center max-w-4xl mx-auto space-y-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          The Future of{" "}
          <span className="text-blue-600">Networking, Technology & Security</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          GNT Security engineers next-generation infrastructure and systems to streamline, secure, and scale businesses.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a href="/procezly" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Explore Procezly
          </a>
          <a href="/contact" className="px-6 py-3 border border-gray-400 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Us
          </a>
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {[
          { icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, title: "Security First", desc: "From architecture to execution — everything we do is hardened, verified, and trusted." },
          { icon: <Server className="w-8 h-8 text-blue-600" />, title: "Infrastructure Smart", desc: "Designed for scale, optimized for control. Custom cloud + on-prem systems that just work." },
          { icon: <Zap className="w-8 h-8 text-blue-600" />, title: "Built for Speed", desc: "We move fast without breaking things. Code, ship, secure, iterate — at enterprise velocity." }
        ].map(({ icon, title, desc }, i) => (
          <motion.div
            key={i}
            className="bg-white border rounded-2xl p-6 shadow-md space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div>{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Spotlight: Procezly */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Procezly: The Future of Process</h2>
          <p className="text-gray-700 mb-4">
            Procezly helps teams orchestrate complex workflows without bloated tools or spreadsheets. Automate operations, ensure compliance, and scale with confidence.
          </p>
          <a href="/procezly" className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Learn More
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border p-6 bg-white shadow-md">
            <BarChart3 className="w-full h-32 text-blue-500" />
          </div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          More Than a Tech Company
        </motion.h2>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          GNT Security is building the backbone of future business — with trusted infrastructure, autonomous security, and software that stays out of your way.
        </motion.p>
      </section>

      {/* Final CTA */}
      <section className="text-center bg-gradient-to-br from-gray-50 to-white py-20 px-4 rounded-2xl shadow-inner">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to modernize your systems?
        </motion.h2>
        <a
          href="/contact"
          className="inline-block mt-4 px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
}
