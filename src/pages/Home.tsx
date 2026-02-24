import { motion } from "framer-motion";
import {
  ShieldCheck,
  Server,
  Zap,
  BarChart3,
  Wifi,
  PhoneCall,
} from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-32">
      <section className="pt-24 text-center max-w-4xl mx-auto space-y-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Managed IT & Cybersecurity{" "}
          <span className="text-blue-600">for Businesses</span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          GNT Security delivers fully managed IT, endpoint security, network support, and
          reliable helpdesk so you do not have to think about technology at all.
        </motion.p>
        <motion.p
          className="text-base text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >          Built for reliability, security, and scalability—so your team can stay focused while we handle the systems behind the scenes.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="mailto:sales@gntsecurity.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Email Sales For Pricing
          </a>
          <a
            href="/services"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Managed Services
          </a>
        </motion.div>
        <motion.p
          className="text-sm text-gray-500 pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Remote-first support with planned travel and partner coverage when on-site service
          is needed.
        </motion.p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
            title: "Security-First",
            desc: "Endpoint protection, patching, hardening, and monitoring built into every plan.",
          },
          {
            icon: <Server className="w-8 h-8 text-blue-600" />,
            title: "Managed Infrastructure",
            desc: "Servers, workstations, laptops, and network devices maintained and monitored.",
          },
          {
            icon: <Wifi className="w-8 h-8 text-blue-600" />,
            title: "Reliable Networks",
            desc: "Wi-Fi, routing, VPN, and remote access configured for uptime and visibility.",
          },
          {
            icon: <Zap className="w-8 h-8 text-blue-600" />,
            title: "Responsive Support",
            desc: "Helpdesk for day-to-day issues and on-site support options when needed.",
          },
        ].map(({ icon, title, desc }, i) => (
          <motion.div
            key={title}
            className="bg-white border rounded-2xl p-6 shadow-md space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div>{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">What We Manage For You</h2>
          <p className="text-gray-700">
            Instead of juggling vendors, tools, and tickets, you get one point of contact for
            everything: devices, users, security, backups, networking, and cloud.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <ul className="space-y-2">
              <li>• 24/7 device and security monitoring</li>
              <li>• Antivirus, EDR, and ransomware protection</li>
              <li>• Patch and update management</li>
              <li>• User onboarding and offboarding</li>
              <li>• Email and identity management</li>
            </ul>
            <ul className="space-y-2">
              <li>• Wi-Fi, switching, and firewall management</li>
              <li>• VPN and secure remote access</li>
              <li>• Backup and disaster recovery</li>
              <li>• Hardware lifecycle planning</li>
              <li>• Remote work and branch office setups</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-50 border rounded-2xl p-6 space-y-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Always-On Visibility</h3>
          </div>
          <p className="text-gray-700 text-sm">
            Every system we manage feeds into centralized monitoring so issues are caught early.
            You get status, alerts, and recommendations without having to log into ten different
            dashboards.
          </p>
          <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
            <div className="space-y-1">
              <p className="font-semibold text-gray-800">For Businesses</p>
              <p>• Offices, retail, warehouses, remote staff</p>
              <p>• Policy-driven security and access</p>
              <p>• Standardized builds and documentation</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-gray-800">For Home Users</p>
              <p>• Secure home networks and Wi-Fi</p>
              <p>• Parental controls and content filtering</p>
              <p>• Backup and device cleanup services</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto text-center space-y-6 pb-20">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready To Offload IT, Security, And Network Headaches?
        </motion.h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Tell us what you are working with today and what is breaking. We will map out a managed
          service plan that covers devices, users, security, backups, and connectivity in one
          agreement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:sales@gntsecurity.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Email Sales For Pricing
          </a>
          <a
            href="tel:+15104690947"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-lg text-lg font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            <PhoneCall className="w-5 h-5" />
            Call (510) 469-0947
          </a>
        </div>
      </section>
    </div>
  );
}
