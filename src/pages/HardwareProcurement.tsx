import { motion } from "framer-motion";
import { Monitor, Server, ClipboardCheck, DollarSign, Barcode } from "lucide-react";

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
          className="text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          From workstations to servers, we handle the entire lifecycle of your IT hardware—selection, purchasing,
          deployment, and lifecycle management.
        </motion.p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <motion.div
          className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Monitor className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Workstations & Laptops</h2>
          <p className="text-gray-600">
            Sourcing business-grade desktops and laptops from trusted vendors, tailored to your performance,
            security, and budget needs.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Server className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Servers & Infrastructure</h2>
          <p className="text-gray-600">
            Procurement for on-premises and hybrid infrastructures including servers, storage, and networking
            equipment with proper sizing and redundancy.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ClipboardCheck className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Standardized Hardware Profiles</h2>
          <p className="text-gray-600">
            We help define standard hardware profiles for roles in your organization to simplify ordering,
            deployment, and support.
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
          <h2 className="text-2xl font-semibold">Procurement Process</h2>
          <p className="text-gray-600">
            We follow a structured, transparent procurement process to ensure you get the right hardware at the right
            price with minimal disruption to your operations.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>• Requirements gathering with stakeholders</li>
            <li>• Vendor and model selection based on standards</li>
            <li>• Quote sourcing and cost comparison</li>
            <li>• Ordering, tracking, and receiving management</li>
            <li>• Asset tagging and inventory updates</li>
          </ul>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex items-start gap-4">
            <DollarSign className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Cost Optimization</h3>
              <p className="text-gray-600">
                We standardize on reliable hardware platforms, negotiate with vendors, and avoid consumer-grade
                equipment that costs more to support over time.
              </p>
            </div>
          </div>

          <div className="p-6 border rounded-2xl bg-white shadow-sm flex items-start gap-4">
            <Barcode className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Asset Tracking</h3>
              <p className="text-gray-600">
                Each device is tracked from purchase through deployment to retirement, improving compliance, warranty
                handling, and lifecycle planning.
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
          <h2 className="text-2xl font-semibold mb-4">Why Centralize Hardware Procurement?</h2>
          <p className="text-gray-600 mb-3">
            Decentralized purchasing leads to mismatched hardware, unsupported devices, and higher long-term costs.
            With centralized procurement, your organization benefits from:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Consistent standards across all endpoints</li>
            <li>• Predictable performance and compatibility</li>
            <li>• Streamlined onboarding and replacement processes</li>
            <li>• Better security posture and easier patch management</li>
            <li>• Clear inventory and lifecycle visibility</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
