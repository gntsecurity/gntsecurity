import { motion } from "framer-motion";
import {
  Mail,
  Shield,
  AlertTriangle,
  Filter,
  UserCheck,
  Lock,
  KeyRound,
  Info,
} from "lucide-react";

export default function EmailSecurityExpectations() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Email Security Expectations
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          How we protect your mailboxes and what we expect from users to keep accounts safe.
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
          <Shield className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Layered Protection</h2>
          <p className="text-gray-700">
            Spam filtering, malware scanning, and impersonation protection tuned for business use.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Lock className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Account Security</h2>
          <p className="text-gray-700">
            Strong authentication policies, conditional access, and controls for high-risk sign-ins.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <UserCheck className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
          <p className="text-gray-700">
            Clear expectations for how staff handle suspicious messages and sensitive information.
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
          <h2 className="text-2xl font-semibold">Technical Controls</h2>
          <p className="text-gray-700">
            We implement modern controls across your email platform to minimize risk from phishing and account
            compromise.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>• SPF, DKIM, and DMARC configuration and monitoring</li>
            <li>• Advanced spam and phishing detection policies</li>
            <li>• External sender tagging and attachment controls</li>
            <li>• Sign-in risk and location-based alerts</li>
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
            <Filter className="h-6 w-6 mt-1 text-slate-900" />
            <div>
              <h3 className="font-semibold mb-1">Message Filtering</h3>
              <p className="text-gray-700">
                Policies for quarantine, review, and safe delivery of email so security does not block business.
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <KeyRound className="h-6 w-6 mt-1 text-slate-900" />
            <div>
              <h3 className="font-semibold mb-1">Multi-Factor Authentication</h3>
              <p className="text-gray-700">
                Requirements for MFA enrollment, device trust, and what to do if a factor is lost or compromised.
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <AlertTriangle className="h-6 w-6 mt-1 text-slate-900" />
            <div>
              <h3 className="font-semibold mb-1">Reporting Suspicious Email</h3>
              <p className="text-gray-700">
                How to report phishing attempts, what happens after you report, and how we communicate back.
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
          <div className="flex items-start gap-3 mb-4">
            <Mail className="h-6 w-6 mt-1 text-slate-900" />
            <div>
              <h2 className="text-2xl font-semibold">Everyday Expectations for Users</h2>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>• Never approve MFA prompts you did not initiate</li>
            <li>• Do not send passwords or sensitive data in plain email</li>
            <li>• Verify banking or payment changes using a second channel</li>
            <li>• Use the built-in report button for suspicious messages</li>
          </ul>
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 mt-1" />
            <p className="text-gray-700">
              Security awareness training and phishing simulations are used to keep staff sharp and lower risk over
              time.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
