import { motion } from "framer-motion";
import { Monitor, Server, ShoppingCart, ClipboardCheck, DollarSign, Barcode } from "lucide-react";

export default function HardwareProcurement() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hardware Procurement
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          We provide business-grade hardware selected, sourced, configured, and deployed under one roof.
          Single vendor accountability. Zero guesswork.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          className="bg-white border p-6 rounded-2xl shadow-sm space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Monitor className="w-10 h-10 text-blue-600" />
          <h2 className="text-xl font-semibold">Workstations & Laptops</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Standardized configurations</li>
            <li>• Reliable business-class hardware</li>
            <li>• Imaging and setup included</li>
            <li>• Replacement lifecycle planning</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border p-6 rounded-2xl shadow-sm space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Server className="w-10 h-10 text-blue-600" />
          <h2 className="text-xl font-semibold">Servers & Network</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Infrastructure aligned to business scale</li>
            <li>• Quality routing and switching</li>
            <li>• Secure Wi-Fi deployments</li>
            <li>• Smart growth and expansion paths</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border p-6 rounded-2xl shadow-sm space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Barcode className="w-10 h-10 text-blue-600" />
          <h2 className="text-xl font-semibold">Lifecycle Inventory</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Asset tracking</li>
            <li>• Warranty monitoring</li>
            <li>• End-of-life planning</li>
            <li>• Proper disposal of retired devices</li>
          </ul>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pb-24">
        <motion.div
          className="bg-gray-50 border p-6 rounded-2xl space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ClipboardCheck className="w-8 h-8 text-blue-600" />
          <h2 className="text-xl font-semibold">Pre-Deployment Services</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• System provisioning</li>
            <li>• Business app installation</li>
            <li>• User credential setup</li>
            <li>• On-site or remote rollout</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border p-6 rounded-2xl shadow-sm space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <DollarSign className="w-8 h-8 text-blue-600" />
          <h2 className="text-xl font-semibold">Procurement Advantage</h2>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Competitive pricing</li>
            <li>• Consistent vendor reliability</li>
            <li>• Zero markup surprises</li>
            <li>• Invoicing aligned to budgets</li>
          </ul>
        </motion.div>
      </section>

      <section className="text-center pb-32">
        <a
          href="mailto:sales@gntsecurity.com"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Request Hardware Quotes
        </a>
      </section>
    </div>
  );
}
