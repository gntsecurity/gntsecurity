import { motion } from "framer-motion";
import { Quote, Star, Building2, Users, Shield } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonials &amp; Case Studies
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Real results from organizations that rely on GNT Security for IT and security operations.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8" />
            <div>
              <p className="font-semibold">Regional Professional Services Firm</p>
              <p className="text-sm text-gray-500">50–75 employees</p>
            </div>
          </div>
          <Quote className="w-8 h-8 text-gray-400" />
          <p className="text-gray-700">
            “We went from constant IT fires to a predictable environment. GNT standardized our networks and moved us
            to managed security tools without downtime.”
          </p>
          <div className="flex gap-1 text-yellow-400">
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
          </div>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8" />
            <div>
              <p className="font-semibold">Compliance-Driven Organization</p>
              <p className="text-sm text-gray-500">Regulated industry</p>
            </div>
          </div>
          <Quote className="w-8 h-8 text-gray-400" />
          <p className="text-gray-700">
            “Their documentation and security baselines gave us confidence walking into audits. We finally have an IT
            partner that thinks about risk the way we do.”
          </p>
          <div className="flex gap-1 text-yellow-400">
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
          </div>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8" />
            <div>
              <p className="font-semibold">Multi-Site Organization</p>
              <p className="text-sm text-gray-500">Multiple locations</p>
            </div>
          </div>
          <Quote className="w-8 h-8 text-gray-400" />
          <p className="text-gray-700">
            “Rolling out standardized networks and centrally managed security tools at every location drastically
            reduced support noise and surprises.”
          </p>
          <div className="flex gap-1 text-yellow-400">
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
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
          <h2 className="text-2xl font-semibold mb-4">Interested In A Deeper Case Study?</h2>
          <p className="text-gray-700 mb-3">
            We can provide anonymized case studies that match your size, industry, and technology stack so you can see
            how we approach projects similar to yours.
          </p>
          <p className="text-gray-700">
            Ask us for examples focused on network redesign, cloud migrations, security baseline projects, or fully
            managed IT.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
