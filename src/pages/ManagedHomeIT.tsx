import { motion } from "framer-motion";
import {
  Home,
  Wifi,
  ShieldCheck,
  Cloud,
  Laptop2,
  PhoneCall,
  Mail,
  HardDrive,
} from "lucide-react";

export default function ManagedHomeIT() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Managed Home IT Support
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Reliable and secure IT support for homes that depend on technology for work,
          school, and everyday life.
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
            <Wifi className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">Wi-Fi & Networking</h2>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Fix slow or unreliable internet</li>
            <li>• Improve coverage in every room</li>
            <li>• Secure guest network separation</li>
            <li>• Support IoT device connections</li>
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
            <Laptop2 className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">Device Support</h2>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Performance cleanup and updates</li>
            <li>• Software troubleshooting</li>
            <li>• Printer and smart device setup</li>
            <li>• Remote issue resolution</li>
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
            <h2 className="text-xl font-semibold">Security Protection</h2>
          </div>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Malware and phishing protection</li>
            <li>• Secure remote work solutions</li>
            <li>• Parental guidance if needed</li>
            <li>• Patch & update management</li>
          </ul>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr,1fr] gap-10">
        <motion.div
          className="bg-gray-50 border rounded-2xl p-6 space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Cloud className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Backup & Data Protection</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Backup for photos and important files</li>
            <li>• Help recovering lost data when possible</li>
            <li>• Guidance on storage best practices</li>
            <li>• Cloud setup for syncing devices</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <HardDrive className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-semibold">What We Check First</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Internet quality and router health</li>
            <li>• Wi-Fi drop zones and interference</li>
            <li>• Device age and protection status</li>
            <li>• Any issues impacting work or school</li>
          </ul>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto bg-white border rounded-2xl p-6 shadow-sm space-y-6 mb-16">
        <div className="flex items-center gap-3">
          <Home className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold">Get Help At Home</h2>
        </div>
        <p className="text-sm text-gray-700">
          A quick phone call or email can schedule support. If something is broken or just
          needs tuned up, we can help get things stable again with as little disruption as
          possible.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="mailto:sales@gntsecurity.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            <Mail className="w-4 h-4" />
            Email Sales For Pricing
          </a>
          <a
            href="tel:+15104690947"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            <PhoneCall className="w-4 h-4 text-gray-800" />
            Call (510) 469-0947
          </a>
        </div>
      </section>
    </div>
  );
}
