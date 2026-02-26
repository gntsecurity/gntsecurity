import { motion } from "framer-motion";
import { FileText, Shield, AlertTriangle, Scale } from "lucide-react";

export default function Terms() {
  return (
    <div className="space-y-16 max-w-5xl mx-auto px-4 py-20">
      <section className="space-y-4 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Terms of Service
        </motion.h1>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Last updated: {new Date().getFullYear()}
        </motion.p>
        <motion.p
          className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          These Terms govern your use of our website and any services provided by GNT Security
          ("we", "us", "our"). By using the site or engaging services, you agree to these Terms.
        </motion.p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <FileText className="w-6 h-6 text-blue-600" />
          1. Relationship To Other Agreements
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          These Terms are general. If you sign a master services agreement, statement of work, or
          similar contract with us, that agreement controls where it conflicts with these Terms.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Shield className="w-6 h-6 text-blue-600" />
          2. Services
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We provide managed IT, cybersecurity, network, consulting, and related services. Specific
          scope, deliverables, and pricing depend on what is agreed in writing.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <FileText className="w-6 h-6 text-blue-600" />
          3. Your Responsibilities
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Provide accurate information and current points of contact.</li>
          <li>Maintain proper licenses for third-party products and services you use.</li>
          <li>Follow reasonable security recommendations provided by us.</li>
          <li>Notify us promptly about incidents, outages, or significant changes.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <AlertTriangle className="w-6 h-6 text-blue-600" />
          4. Acceptable Use
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          You agree not to use our site or services to violate law, distribute malware, attempt
          unauthorized access, interfere with systems, or misuse confidential information.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Scale className="w-6 h-6 text-blue-600" />
          5. Disclaimers And Limitation Of Liability
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          The website is provided "as is". To the maximum extent permitted by law, we disclaim all
          warranties not expressly stated in a written agreement.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          To the maximum extent permitted by law, GNT Security is not liable for indirect,
          incidental, special, consequential, or punitive damages. Any liability relating to
          services is governed by the applicable written agreement.
        </p>
      </section>

      <section className="space-y-6 pb-8">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <FileText className="w-6 h-6 text-blue-600" />
          6. Contact
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Questions about these Terms:
        </p>
        <ul className="text-gray-700 text-sm md:text-base space-y-1">
          <li>
            Email:{" "}
            <a href="mailto:sales@gntsecurity.com" className="text-blue-600 hover:underline">
              sales@gntsecurity.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:+15104690947" className="text-blue-600 hover:underline">
              (510) 469-0947
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}