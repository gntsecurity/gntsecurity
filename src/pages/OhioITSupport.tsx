import { motion } from "framer-motion";
import {
  MapPin,
  Building2,
  Home,
  Shield,
  Network,
  HardDrive,
  PhoneCall,
  Mail,
} from "lucide-react";

export default function OhioITSupport() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          IT Support In Ohio
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          GNT Security provides managed IT, cybersecurity, and network support for Ohio
          businesses and home users that want stable, secure systems without managing
          everything on their own.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Building2 className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">Business IT Support</h2>
          </div>
          <p className="text-sm text-gray-700">
            For offices, shops, and remote teams that need a single point of contact for all
            IT and security work.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Managed workstations, laptops, and shared devices</li>
            <li>• Support for office networks, Wi-Fi, and VPN</li>
            <li>• Helpdesk for day-to-day issues and changes</li>
            <li>• Backup and recovery planning for important data</li>
            <li>• Security controls to reduce risk and downtime</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Home className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">Home IT Support</h2>
          </div>
          <p className="text-sm text-gray-700">
            For homes that rely on technology for work, school, and daily life and want it to
            stay secure and working.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Home network and Wi-Fi tuning</li>
            <li>• Device cleanup and performance fixes</li>
            <li>• Backup options for important photos and files</li>
            <li>• Secure remote access for working from home</li>
            <li>• Simple guidance to avoid common threats</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">Security-Focused</h2>
          </div>
          <p className="text-sm text-gray-700">
            Every service is built around keeping systems protected while still usable.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Endpoint protection and patching policies</li>
            <li>• Access controls and permission reviews</li>
            <li>• Backup checks and test restores</li>
            <li>• Monitoring of covered systems</li>
            <li>• Clear recommendations when risk is found</li>
          </ul>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr,1fr] gap-10">
        <motion.div
          className="bg-gray-50 border rounded-2xl p-6 space-y-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Typical Areas Covered</h2>
          </div>
          <p className="text-sm text-gray-700">
            Onsite support is focused on Ohio. Remote support can extend beyond these areas
            when it makes sense, but most work is centered around:
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            <ul className="space-y-1">
              <li>• Dayton and surrounding communities</li>
              <li>• Springfield and nearby towns</li>
              <li>• Cincinnati metro area</li>
              <li>• Columbus and surrounding suburbs</li>
            </ul>
            <ul className="space-y-1">
              <li>• Small offices and retail spaces</li>
              <li>• Warehouses and light industrial sites</li>
              <li>• Home offices and remote workers</li>
              <li>• Multi-site setups within the state</li>
            </ul>
          </div>
          <p className="text-xs text-gray-500">
            Exact onsite availability depends on distance and scheduling. Remote-only support
            can be used for many requests regardless of location.
          </p>
        </motion.div>

        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Network className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-semibold">What We Look At First</h2>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Internet connection, modem, and primary router</li>
            <li>• Wi-Fi coverage and cabling health</li>
            <li>• Devices in use and how they are protected</li>
            <li>• Current backup approach, if any</li>
            <li>• Any critical apps that must stay online</li>
          </ul>
          <div className="flex items-center gap-3 pt-3">
            <HardDrive className="w-5 h-5 text-blue-600" />
            <p className="text-xs text-gray-600">
              From there, a managed service plan is sized around the number of users, devices,
              and systems that need coverage.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto bg-white border rounded-2xl p-6 shadow-sm space-y-5 mb-16">
        <div className="flex items-center gap-3">
          <PhoneCall className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold">Talk About Your Environment</h2>
        </div>
        <p className="text-sm text-gray-700">
          A short call or email with basic details is enough to get started. You do not need
          perfect documentation or diagrams ready. Just describe what you have, what is
          breaking, and what you want to improve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="space-y-1">
            <p className="font-semibold text-gray-900">Helpful details to include:</p>
            <ul className="space-y-1">
              <li>• Number of users and devices</li>
              <li>• Any servers or shared storage</li>
              <li>• Types of internet connections and locations</li>
              <li>• Current backup and security tools, if known</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-gray-900">Contact options:</p>
            <p>
              Phone:{" "}
              <a href="tel:+19376715597" className="text-blue-600 hover:underline">
                937.671.5597
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:sales@gntsecurity.com"
                className="text-blue-600 hover:underline break-all"
              >
                sales@gntsecurity.com
              </a>
            </p>
            <p className="text-xs text-gray-500">
              Mention that you are interested in managed IT or support for an Ohio location so
              the conversation can stay focused.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="mailto:sales@gntsecurity.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            <Mail className="w-4 h-4" />
            Email Sales For Pricing
          </a>
          <a
            href="tel:+19376715597"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            <PhoneCall className="w-4 h-4" />
            Call 937.671.5597
          </a>
        </div>
      </section>
    </div>
  );
}
