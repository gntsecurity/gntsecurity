import { motion } from "framer-motion";
import { Shield, Lock, Server, Globe2 } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="space-y-16 max-w-5xl mx-auto px-4 py-20">
      <section className="space-y-4 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Policy
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
          This Privacy Policy explains how GNT Security ("we", "us", "our") collects, uses, and
          protects information in connection with our website and managed IT, cybersecurity,
          network, and related services.
        </motion.p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Shield className="h-6 w-6 text-slate-900" />
          Scope
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          This Policy applies to information we collect when you visit our website, contact us,
          subscribe to updates, or engage us for services.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          This Policy does not override any written agreement you sign with us. If there is a
          conflict, the signed agreement controls.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Lock className="h-6 w-6 text-slate-900" />
          Information We Collect
        </h2>
        <div className="space-y-4 text-gray-700 text-sm md:text-base">
          <div>
            <p className="font-semibold">Contact information</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Name, email address, phone number, and company information you submit.</li>
              <li>Messages you send through our contact forms or email.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Service-related information</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Support requests, ticket details, and communications with our team.</li>
              <li>
                Technical information required to deliver services, such as device identifiers,
                configuration details, logs, alerts, and threat indicators from tools we deploy or
                manage on your behalf.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Website usage information</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Basic analytics such as page views, referral source, and approximate location.</li>
              <li>Security and performance logs used to protect the site and services.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Server className="h-6 w-6 text-slate-900" />
          How We Use Information
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Provide, operate, and support our services and website.</li>
          <li>Respond to requests, quotes, and support issues.</li>
          <li>Monitor systems for health, availability, and security where contracted.</li>
          <li>Detect, investigate, and respond to security events and incidents.</li>
          <li>Billing, account management, and legal compliance.</li>
          <li>Send service notices and security advisories; marketing updates where permitted.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Globe2 className="h-6 w-6 text-slate-900" />
          Sharing Information
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We do not sell personal information. We may share information with vendors and service
          providers that help us deliver services (such as email, cloud, security, backup, and
          ticketing providers), and when required by law or to protect rights and safety.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Lock className="h-6 w-6 text-slate-900" />
          Security And Retention
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We use reasonable technical and organizational measures to protect information. No
          security controls are perfect, and we cannot guarantee absolute security.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          We retain information as long as reasonably necessary for services, legal obligations,
          dispute resolution, and enforcement of agreements. Retention may vary for logs, backups,
          and support history.
        </p>
      </section>

      <section className="space-y-6 pb-8">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Lock className="h-6 w-6 text-slate-900" />
          Contact
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Questions about this Policy:
        </p>
        <ul className="text-gray-700 text-sm md:text-base space-y-1">
          <li>
            Email:{" "}
            <a href="mailto:sales@gntsecurity.com" className="hover:underline">
              sales@gntsecurity.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:+15104690947" className="hover:underline">
              (510) 469-0947
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}