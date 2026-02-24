import { motion } from "framer-motion";
import {
  Cloud,
  ServerCog,
  Shield,
  Wrench,
  Cpu,
  KeyRound,
  Wifi,
  HardDrive,
} from "lucide-react";

export default function Services() {
  return (
    <div className="space-y-24">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Managed Services Built Around Security
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          One provider for endpoints, networks, backups, cloud, and security. Designed for
          businesses that cannot afford downtime.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: <ServerCog className="w-8 h-8 text-blue-600" />,
            title: "Managed IT & Helpdesk",
            desc: [
              "Workstation and laptop management",
              "OS and application patching",
              "User accounts and permissions",
              "Remote and onsite troubleshooting",
              "Hardware recommendations and setup",
            ],
          },
          {
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: "Cybersecurity Services",
            desc: [
              "Endpoint protection and EDR",
              "Firewall configuration and review",
              "Security policies and hardening",
              "Security awareness guidance",
              "Incident response assistance",
            ],
          },
          {
            icon: <Wifi className="w-8 h-8 text-blue-600" />,
            title: "Network & Wi-Fi",
            desc: [
              "Secure Wi-Fi and guest networks",
              "LAN segmentation and VLANs",
              "VPN and remote access",
              "Router and switch configuration",
              "Performance and reliability tuning",
            ],
          },
          {
            icon: <HardDrive className="w-8 h-8 text-blue-600" />,
            title: "Backup & Business Continuity",
            desc: [
              "Workstation and server backups",
              "Local and offsite options",
              "Tested restore procedures",
              "Ransomware-ready recovery planning",
              "Backup monitoring and alerts",
            ],
          },
          {
            icon: <Cloud className="w-8 h-8 text-blue-600" />,
            title: "Cloud & Productivity",
            desc: [
              "Email and productivity platform management",
              "Identity and MFA enforcement",
              "File sharing and access controls",
              "Mailbox and data migrations",
              "License and subscription cleanup",
            ],
          },
          {
            icon: <Wrench className="w-8 h-8 text-blue-600" />,
            title: "Projects & Consulting",
            desc: [
              "New office and move projects",
              "Network redesign and cleanup",
              "Hardware refresh planning",
              "Remote work enablement and secure access",
              "Security and configuration reviews",
            ],
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            className="bg-white border rounded-2xl p-6 shadow-md space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <div>{card.icon}</div>
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {card.desc.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start pb-20">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Cpu className="w-6 h-6 text-blue-600" />
            What Every Managed Client Receives
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Centralized monitoring and alerting for covered systems</li>
            <li>• Patch management and security updates on a defined schedule</li>
            <li>• Baseline configuration standards for devices and network gear</li>
            <li>• Documentation of network, endpoints, and critical services</li>
            <li>• A direct contact for support and escalation</li>
          </ul>
        </motion.div>

        <motion.div
          className="space-y-4 bg-gray-50 border rounded-2xl p-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <KeyRound className="w-6 h-6 text-blue-600" />
            Getting Pricing And Next Steps
          </h2>
          <p className="text-sm text-gray-700">
            Pricing is based on the number of users, devices, and the scope of systems under
            management. Email a quick overview of your environment and we will respond with options.
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>Include as much of this as you can:</p>
            <ul className="space-y-1">
              <li>• Number of users and endpoints</li>
              <li>• Servers, line-of-business apps, or special systems</li>
              <li>• Current backup and security tools, if any</li>
              <li>• Locations and any remote workers</li>
            </ul>
          </div>
          <a
            href="mailto:sales@gntsecurity.com"
            className="inline-block mt-3 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Email Sales For Pricing
          </a>
        </motion.div>
      </section>
    </div>
  );
}
