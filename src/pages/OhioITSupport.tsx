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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-wide uppercase text-gray-500">
            Managed IT Services &amp; Support
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Reliable IT Support For Modern Organizations
          </h1>
        </motion.div>

        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          GNT Security provides managed IT, cybersecurity, and network support for
          businesses and home users that want stable, secure systems without managing
          everything on their own. We operate remotely by default and schedule on-site
          visits with proper planning when they are needed.
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
            <Building2 className="w-7 h-7" />
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
            <li>• Security controls aligned to modern best practices</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Home className="w-7 h-7" />
            <h2 className="text-xl font-semibold">Home &amp; Remote Worker Support</h2>
          </div>
          <p className="text-sm text-gray-700">
            Support for home offices, remote workers, and small environments that still
            expect enterprise-grade stability.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Secure remote access into corporate systems</li>
            <li>• Router, Wi-Fi, and endpoint hardening</li>
            <li>• Guidance on working safely from anywhere</li>
            <li>• Backup options for personal and work devices</li>
            <li>• Vendor coordination when issues cross providers</li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7" />
            <h2 className="text-xl font-semibold">Security-Focused Management</h2>
          </div>
          <p className="text-sm text-gray-700">
            Management built around security baselines instead of ad-hoc fixes, so your
            environment gets stronger over time.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Standardized builds for servers and endpoints</li>
            <li>• Patch management with maintenance windows</li>
            <li>• Endpoint protection, EDR, and monitoring</li>
            <li>• Documentation of changes and exceptions</li>
            <li>• Regular reviews of risk and improvement plans</li>
          </ul>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Network className="w-7 h-7" />
            <h2 className="text-xl font-semibold">Network &amp; Infrastructure</h2>
          </div>
          <p className="text-sm text-gray-700">
            We standardize firewalls, switches, Wi-Fi, and site-to-site connectivity so new
            locations and projects can be added without surprises.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Network designs that can scale to additional sites</li>
            <li>• Secure remote access for staff and vendors</li>
            <li>• Monitoring and alerting for critical links and gear</li>
            <li>• Coordination with ISPs and third-party providers</li>
            <li>• Documentation you can understand and reference</li>
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
            <HardDrive className="w-7 h-7" />
            <h2 className="text-xl font-semibold">Backups, Continuity, And Planning</h2>
          </div>
          <p className="text-sm text-gray-700">
            We design backup and continuity plans around your actual risk, not just a
            checkbox. The goal is to be ready before something breaks.
          </p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Image and file-level backups for key systems</li>
            <li>• Cloud and on-premises options with tested restores</li>
            <li>• Defined recovery time and recovery point objectives</li>
            <li>• Periodic testing and reporting so plans stay current</li>
            <li>• Coordination with partner providers for emergencies</li>
          </ul>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto pb-20">
        <motion.div
          className="bg-gray-50 border rounded-2xl p-8 space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold mb-1">
                Remote-First, With On-Site Available
              </h2>
              <p className="text-sm text-gray-700">
                Most support is delivered remotely for speed and consistency. When on-site
                work is required, we schedule it with proper planning and can coordinate
                trusted partners for coverage in areas that would otherwise be out of range
                for a same-day visit.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t mt-4">
            <a
              href="mailto:sales@gntsecurity.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              <Mail className="w-4 h-4" />
              Email Sales For Pricing
            </a>
            <a
              href="tel:+15104690947"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
            >
              <PhoneCall className="w-4 h-4" />
              Call (510) 469-0947
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
