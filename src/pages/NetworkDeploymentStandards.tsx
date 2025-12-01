import { motion } from "framer-motion";
import {
  Network,
  Router,
  ShieldCheck,
  Cable,
  Server,
  Wifi,
  Workflow,
} from "lucide-react";

export default function NetworkDeploymentStandards() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Network Deployment Standards
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Consistent, secure, and supportable networks for offices, warehouses, and remote locations.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Router className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Standardized Edge</h2>
          <p className="text-gray-700">
            Firewalls, routers, and SD-WAN appliances deployed with templated configurations and change control.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Cable className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Structured Cabling</h2>
          <p className="text-gray-700">
            Switch layouts, VLANs, and PoE budgets planned up-front so growth and new devices are easy to support.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Wifi className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Wireless Design</h2>
          <p className="text-gray-700">
            Wi-Fi designed for capacity and coverage, with secure SSIDs for guests, staff, and corporate devices.
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
          <h2 className="text-2xl font-semibold">Security &amp; Segmentation</h2>
          <p className="text-gray-700">
            The same standards are applied at every site so security is predictable and enforceable.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• Segmented VLANs for users, servers, IoT, and guests</li>
            <li>• Least-privilege firewall rules and geo-controls</li>
            <li>• VPN access for remote workers and vendors</li>
            <li>• Centralized logging and alerting on key events</li>
          </ul>
        </motion.div>

        <motion.div
          className="grid gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <Network className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Standard Designs</h3>
              <p className="text-gray-700">
                Reference network designs for small offices, multi-site environments, and remote workers.
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <Server className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Core Services</h3>
              <p className="text-gray-700">
                DNS, DHCP, and identity services deployed to avoid single points of failure and misconfiguration.
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <ShieldCheck className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Change Management</h3>
              <p className="text-gray-700">
                Documented change windows, rollback plans, and versioned configurations for reliable operations.
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
          <div className="flex items-start gap-3 mb-3">
            <Workflow className="w-7 h-7 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold">Deployment Process</h2>
              <p className="text-gray-700">
                Every network build follows the same steps, from design through documentation.
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Discovery and requirements gathering</li>
            <li>• Design diagrams and IP addressing plans</li>
            <li>• Hardware staging and configuration</li>
            <li>• Cutover, validation, and optimization</li>
            <li>• As-built documentation and onboarding into monitoring</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
