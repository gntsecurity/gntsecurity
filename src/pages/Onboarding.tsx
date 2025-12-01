import { motion } from "framer-motion";
import {
  ClipboardList,
  ShieldCheck,
  Network,
  FileText,
  RefreshCw,
  Users,
} from "lucide-react";

export default function Onboarding() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Managed Service Onboarding Process
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          This is how GNT Security brings a new environment under management, stabilizes it,
          and keeps it documented without disrupting day-to-day work.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <ClipboardList className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">1. Discovery Call</h2>
          </div>
          <p className="text-sm text-gray-700">
            Short call to understand your business, locations, and what is currently breaking.
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Users, endpoints, and servers</li>
            <li>• Internet, Wi-Fi, and remote access</li>
            <li>• Current tools for backup and security</li>
            <li>• Any known outages or recurring issues</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Network className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">2. Environment Scan</h2>
          </div>
          <p className="text-sm text-gray-700">
            Remote session and onsite walk-through if needed to see how everything is really wired.
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Network layout and key devices</li>
            <li>• Servers, NAS, cloud services in use</li>
            <li>• Line-of-business apps and integrations</li>
            <li>• Current backup targets and schedules</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">3. Stabilize & Secure</h2>
          </div>
          <p className="text-sm text-gray-700">
            Critical risks are handled first so the environment is safe before deeper changes.
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Deploy endpoint protection where missing</li>
            <li>• Fix obvious backup gaps</li>
            <li>• Address exposed remote access paths</li>
            <li>• Apply essential updates to critical systems</li>
          </ul>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className="bg-gray-50 border rounded-2xl p-6 space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">4. Documentation & Standards</h2>
          </div>
          <p className="text-sm text-gray-700">
            Once the immediate fires are out, we write everything down and align systems to
            baseline standards.
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Network diagram and IP plan</li>
            <li>• Inventory of covered devices and services</li>
            <li>• Password and access management approach</li>
            <li>• Backup retention and restore objectives</li>
            <li>• Standard build templates for new devices</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-gray-50 border rounded-2xl p-6 space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">5. Go-Live With The Team</h2>
          </div>
          <p className="text-sm text-gray-700">
            We communicate how to get help, what is covered, and what to expect from support.
          </p>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Support contact details and expectations</li>
            <li>• How to report incidents or suspicious activity</li>
            <li>• Onboarding steps for new hires</li>
            <li>• Simple checklists for home and remote setups</li>
          </ul>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto bg-white border rounded-2xl p-6 shadow-sm space-y-4 mb-16">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold">6. Ongoing Management</h2>
        </div>
        <p className="text-sm text-gray-700">
          After onboarding, the environment moves into steady-state management. The same
          processes are used month after month so behavior is predictable.
        </p>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Monitoring and patching on a recurring schedule</li>
          <li>• Regular review of alerts, incidents, and backup reports</li>
          <li>• Adjustments as the business adds locations or staff</li>
          <li>• Periodic recommendations to retire, replace, or upgrade systems</li>
        </ul>
        <p className="text-xs text-gray-500">
          This page is a general overview. Specific onboarding steps and timelines are finalized
          in your service agreement and project notes.
        </p>
      </section>
    </div>
  );
}
