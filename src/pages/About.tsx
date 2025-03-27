import { motion } from "framer-motion";
import { Code2, Network, Lock } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-24">
      {/* Introduction */}
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-20">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Gage's Networking, Technology & Security
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          GNT Security isn't a service provider. It's a systems builder. A digital backbone for modern enterprises — fusing infrastructure, innovation, and security into one cohesive force.
        </motion.p>
      </section>

      {/* Mission + Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="text-gray-700">
            To engineer secure, scalable systems that empower businesses to move faster — with more clarity, more control, and no compromises.
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="text-gray-700">
            To lead the industry in clean, intuitive, secure-first solutions — powering tomorrow's organizations with simplicity and strength.
          </p>
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="max-w-6xl mx-auto space-y-12">
        <motion.h2
          className="text-3xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Drives Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Network className="w-8 h-8 text-blue-600" />,
              title: "Precision Networking",
              desc: "We architect networks that never guess — only guarantee. Secure, efficient, and always online."
            },
            {
              icon: <Code2 className="w-8 h-8 text-blue-600" />,
              title: "Tech Without Bloat",
              desc: "Every component matters. Every tool has a reason. Complexity removed. Power retained."
            },
            {
              icon: <Lock className="w-8 h-8 text-blue-600" />,
              title: "Security at the Core",
              desc: "From physical to digital — our default posture is secure. Not as a feature, but as a foundation."
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
        </div>
      </section>

      {/* Closing Statement */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <motion.h2
          className="text-2xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          This isn’t just tech.
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          It’s a new standard for how technology and infrastructure should work — seamlessly, securely, and smart from the start.
        </motion.p>
      </section>
    </div>
  );
}
