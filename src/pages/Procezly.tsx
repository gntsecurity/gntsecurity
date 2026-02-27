import { motion } from "framer-motion";
import { LayoutDashboard, Repeat, CheckCircle2 } from "lucide-react";

export default function Procezly() {
  return (
    <div className="space-y-24">
      <section className="text-center max-w-4xl mx-auto space-y-6 pt-20">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/procezly_logo.png"
            alt="Procezly logo"
            className="h-16 w-auto"
          />
        </motion.div>
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Procezly – Workflow Automation By GNT Security
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Procezly is an internal workflow and process automation platform originally built by GNT
          Security. Today, our primary focus is managed IT and cybersecurity services, but this
          project remains a showcase of how we approach systems and automation.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-20">
        {[
          {
            icon: <LayoutDashboard className="h-6 w-6 text-slate-900" />,
            title: "Structured Workflows",
            desc: "Turn scattered tasks into repeatable workflows with clear steps and ownership.",
          },
          {
            icon: <Repeat className="h-6 w-6 text-slate-900" />,
            title: "Automation Mindset",
            desc: "Designed around removing manual rework and keeping processes consistent every time.",
          },
          {
            icon: <CheckCircle2 className="h-6 w-6 text-slate-900" />,
            title: "Built By An MSP",
            desc: "Created by the same mindset that runs secure, reliable managed environments.",
          },
        ].map((card) => (
          <motion.div
            key={card.title}
            className="bg-white border rounded-2xl p-6 shadow-md space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>{card.icon}</div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-gray-700">{card.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
