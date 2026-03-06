import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Cloud,
  ServerCog,
  Shield,
  Wrench,
  Cpu,
  KeyRound,
  Wifi,
  HardDrive,
  BookOpen,
  FileText,
  ClipboardList,
  LifeBuoy,
  Siren,
  MapPin,
} from "lucide-react";

export default function Services() {
  const serviceCards = [
    {
      icon: <ServerCog className="h-6 w-6 text-slate-900" />,
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
      icon: <Shield className="h-6 w-6 text-slate-900" />,
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
      icon: <Wifi className="h-6 w-6 text-slate-900" />,
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
      icon: <HardDrive className="h-6 w-6 text-slate-900" />,
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
      icon: <Cloud className="h-6 w-6 text-slate-900" />,
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
      icon: <Wrench className="h-6 w-6 text-slate-900" />,
      title: "Projects & Consulting",
      desc: [
        "New office and move projects",
        "Network redesign and cleanup",
        "Hardware refresh planning",
        "Remote work enablement and secure access",
        "Security and configuration reviews",
      ],
    },
  ];

  const opsLinks = [
    { title: "Service Level Agreement", desc: "Support hours, response targets, and coverage.", to: "/sla", icon: FileText },
    { title: "Onboarding", desc: "What we collect, what we standardize, and how we start.", to: "/onboarding", icon: ClipboardList },
    { title: "Remote Support", desc: "How remote support works and what to expect.", to: "/remote-support", icon: LifeBuoy },
    { title: "Incident Response", desc: "What we do during security incidents and outages.", to: "/incident-response", icon: Siren },
  ];

  const standardsLinks = [
    { title: "Security Standards", desc: "Baseline hardening and security expectations.", to: "/security-standards" },
    { title: "Email Security Expectations", desc: "MFA, mailbox hygiene, and phishing controls.", to: "/email-security-expectations" },
    { title: "Network Deployment Standards", desc: "Network design and standard configuration approach.", to: "/network-deployment-standards" },
    { title: "Business Continuity / DR", desc: "Backups, recovery targets, and planning.", to: "/business-continuity-disaster-recovery" },
    { title: "Acceptable Use", desc: "Acceptable use expectations for systems we manage.", to: "/acceptable-use" },
    { title: "Hardware Procurement", desc: "How we recommend, source, and deploy equipment.", to: "/hardware-procurement" },
    { title: "Customer Resource Library", desc: "Client-facing links and helpful resources.", to: "/customer-resource-library" },
  ];

  const locationPages = [
    {
      city: "Oakland",
      state: "CA",
      to: "/managed-it/oakland-ca",
      desc: "Managed IT services, cybersecurity, infrastructure, and business support for Oakland organizations.",
    },
    {
      city: "Dayton",
      state: "OH",
      to: "/managed-it/dayton-oh",
      desc: "Local managed services, network support, and technology operations for Dayton businesses.",
    },
    {
      city: "Columbus",
      state: "OH",
      to: "/managed-it/columbus-oh",
      desc: "Business IT support, managed infrastructure, and proactive security for Columbus companies.",
    },
    {
      city: "Detroit",
      state: "MI",
      to: "/managed-it/detroit-mi",
      desc: "Managed IT, endpoint support, and infrastructure services for Detroit business environments.",
    },
    {
      city: "Tampa",
      state: "FL",
      to: "/managed-it/tampa-fl",
      desc: "Technology management, cybersecurity, and business support for organizations in Tampa.",
    },
  ];

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
        {serviceCards.map((card, i) => (
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

      <section className="max-w-6xl mx-auto space-y-6">
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold flex items-center gap-2">
            <MapPin className="h-7 w-7 text-slate-900" />
            Managed IT Service Areas
          </h2>
          <p className="text-sm text-gray-700 max-w-3xl">
            Explore our city-specific managed IT service pages for businesses looking for local
            support, cybersecurity, infrastructure assistance, telecommunications, and ongoing IT
            management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {locationPages.map((location, i) => (
            <motion.div
              key={location.to}
              className="bg-white border rounded-2xl p-6 shadow-md space-y-4"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-slate-900">
                <MapPin className="h-5 w-5" />
                <h3 className="text-xl font-semibold">
                  {location.city}, {location.state}
                </h3>
              </div>
              <p className="text-sm text-gray-700">{location.desc}</p>
              <Link
                to={location.to}
                className="inline-flex items-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-gray-50 transition"
              >
                View {location.city} Page
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Cpu className="h-6 w-6 text-slate-900" />
            What Every Managed Client Receives
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Centralized monitoring and alerting for covered systems</li>
            <li>• Patch management and security updates on a defined schedule</li>
            <li>• Baseline configuration standards for devices and network gear</li>
            <li>• Documentation of network, endpoints, and critical services</li>
            <li>• A direct contact for support and escalation</li>
          </ul>

          <div className="pt-6 space-y-3">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-slate-900" />
              Operational Pages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {opsLinks.map((l) => {
                const Icon = l.icon;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="border rounded-2xl p-4 bg-white hover:bg-gray-50 transition space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-slate-900" />
                      <div className="font-semibold text-sm text-gray-900">{l.title}</div>
                    </div>
                    <div className="text-xs text-gray-600">{l.desc}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-4 bg-gray-50 border rounded-2xl p-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <KeyRound className="h-6 w-6 text-slate-900" />
            Getting Pricing And Next Steps
          </h2>
          <p className="text-sm text-gray-700">
            Pricing is based on users, devices, and scope. Send a quick overview and we will reply
            with options.
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

          <div className="pt-4 space-y-3">
            <h3 className="text-lg font-semibold">Standards & Resources</h3>
            <div className="grid grid-cols-1 gap-3">
              {standardsLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="border rounded-xl px-4 py-3 bg-white hover:bg-gray-100 transition"
                >
                  <div className="text-sm font-semibold text-gray-900">{l.title}</div>
                  <div className="text-xs text-gray-600 mt-1">{l.desc}</div>
                </Link>
              ))}
            </div>
          </div>

          <a
            href="mailto:sales@gntsecurity.com"
            className="inline-block mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Email Sales For Pricing
          </a>
        </motion.div>
      </section>
    </div>
  );
}