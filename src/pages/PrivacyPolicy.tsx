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
          This Privacy Policy explains how GNT Security (&quot;we&quot;, &quot;us&quot;,
          &quot;our&quot;) collects, uses, and protects information in connection with our
          managed IT, cybersecurity, network, and related services.
        </motion.p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Shield className="w-6 h-6 text-blue-600" />
          Scope
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          This Policy applies to information we collect:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>When you visit our website or contact us by email or phone.</li>
          <li>
            When you engage us to provide managed services, projects, consulting, or support.
          </li>
          <li>
            Through remote monitoring and management (RMM) tools, security platforms, and other
            software we deploy or manage on your behalf.
          </li>
          <li>
            Through partner and third-party services used to deliver our offerings (such as cloud
            platforms, email providers, networking vendors, and security tools).
          </li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base">
          This Policy does not override any written master services agreement, statement of work,
          or business associate agreement (if applicable) you sign with us. Where those contracts
          conflict with this Policy, the contract controls.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Lock className="w-6 h-6 text-blue-600" />
          Information We Collect
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          The information we collect depends on how you interact with us and which services you
          use. It may include:
        </p>
        <div className="space-y-4 text-gray-700 text-sm md:text-base">
          <div>
            <p className="font-semibold">Contact and account information</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Names, job titles, and contact details such as email and phone number.</li>
              <li>Company name, mailing address, and billing details.</li>
              <li>Account credentials you provide to us for support and administration.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Technical and device information</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Device identifiers, hostnames, IP addresses, MAC addresses, operating system
                details, and installed software.
              </li>
              <li>
                Telemetry and logs from RMM agents, security tools, and network equipment, such
                as performance data, alerts, and threat indicators.
              </li>
              <li>
                Network topology and configuration information used to design and support your
                environment.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Service and support information</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Details about tickets, incidents, and service requests you submit.</li>
              <li>
                Communications with our team by email, ticketing system, remote session, or
                phone.
              </li>
              <li>
                Information we reasonably need to troubleshoot, secure, or maintain your
                systems, which may include limited exposure to files or applications on systems
                we support.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Website and marketing information</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Basic usage information, such as pages visited and referral sources.</li>
              <li>Information you provide when you subscribe to mailing lists or request a quote.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Payment information</p>
            <p>
              We typically use third-party payment processors and billing platforms. Where
              applicable, your payment card data is processed by those providers and not stored
              in our systems beyond necessary billing references.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Server className="w-6 h-6 text-blue-600" />
          How We Use Information
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We use the information we collect for purposes such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Providing, operating, and supporting our managed services and projects.</li>
          <li>Monitoring systems for health, availability, security, and performance.</li>
          <li>
            Detecting, investigating, and responding to security events, vulnerabilities, and
            incidents.
          </li>
          <li>Managing backups, testing recovery, and assisting with restoration when needed.</li>
          <li>Communicating with you about tickets, maintenance, and service changes.</li>
          <li>Improving our offerings, processes, and documentation.</li>
          <li>Billing, account management, and compliance with legal obligations.</li>
          <li>
            Sending security advisories, maintenance notices, and occasional marketing updates
            where permitted. You may opt out of non-essential marketing communications.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Globe2 className="w-6 h-6 text-blue-600" />
          Sharing Information With Third Parties
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We do not sell your personal information. We may share information in these ways:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>
            With service providers that help us deliver our services, such as cloud platforms,
            email and collaboration providers, RMM and security vendors, networking vendors,
            backup providers, ticketing systems, and billing platforms.
          </li>
          <li>
            With your other vendors, when coordination is required to support your environment
            and you have asked or authorized us to work with them.
          </li>
          <li>
            When required by law, regulation, court order, or to respond to lawful requests from
            authorities.
          </li>
          <li>
            When necessary to protect our rights, property, safety, or the rights, property, and
            safety of others.
          </li>
          <li>
            In connection with a business transaction such as a merger, acquisition, or asset
            sale, subject to appropriate confidentiality protections.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Lock className="w-6 h-6 text-blue-600" />
          Data Security, Retention, And Location
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We use reasonable technical and organizational measures designed to protect
          information we manage against unauthorized access, loss, or misuse. No security
          controls are perfect, and we cannot guarantee absolute security.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          We retain information for as long as reasonably necessary to provide services, fulfill
          the purposes described in this Policy, comply with legal or contractual requirements,
          resolve disputes, and enforce our agreements. Retention periods may differ for
          backups, logs, and ticket history.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          Systems we manage and third-party services we use may store information in the United
          States and other locations. Where applicable, we rely on our vendors&apos; published
          security and privacy practices and, where needed, written agreements with them.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Shield className="w-6 h-6 text-blue-600" />
          Your Responsibilities As A Customer
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          As a business-focused MSP, many of our services are delivered under contract to an
          organization. In those cases, your organization is typically the controller of its own
          business data, and we act as a service provider or processor on its behalf.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          You are responsible for:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Providing accurate contact information and keeping us updated on key contacts.</li>
          <li>
            Informing your employees and users about the monitoring, security, and support
            activities you have engaged us to perform.
          </li>
          <li>
            Ensuring you have the right to share any information or system access you provide
            to us.
          </li>
          <li>
            Implementing internal policies and training appropriate for your regulatory and
            business requirements.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <UsersIcon />
          Individual Rights And Choices
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Depending on your location and applicable laws, you may have rights to access, correct,
          or delete certain personal information, or to object to or restrict certain processing.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          For information we process on behalf of a business customer, we may redirect you to
          that organization, as they are typically the party that controls how your data is used.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          To make a request related to your information, contact us using the details in the
          Contact section below. We may need to verify your identity and may not be able to fully
          respond where doing so would conflict with legal, contractual, or security obligations.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Shield className="w-6 h-6 text-blue-600" />
          Children&apos;s Privacy
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Our services are primarily directed to organizations and adults responsible for their
          environments. We do not knowingly collect personal information directly from children
          under 13 years of age. If you believe we have collected such information, contact us
          so we can review and address it.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Globe2 className="w-6 h-6 text-blue-600" />
          Changes To This Policy
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We may update this Privacy Policy from time to time. When we do, we will revise the
          &quot;Last updated&quot; date at the top of the page. Material changes may also be
          communicated through email or service notifications where appropriate.
        </p>
      </section>

      <section className="space-y-6 pb-8">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Lock className="w-6 h-6 text-blue-600" />
          Contact
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          If you have questions about this Policy or how we handle information, you can contact
          us at:
        </p>
        <ul className="text-gray-700 text-sm md:text-base space-y-1">
          <li>Email:{" "}
            <a href="mailto:sales@gntsecurity.com" className="text-blue-600 hover:underline">
              sales@gntsecurity.com
            </a>
          </li>
          <li>Phone:{" "}
            <a href="tel:+15104690947" className="text-blue-600 hover:underline">
              (510) 469-0947
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

function UsersIcon() {
  return <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none">
    <path d="M10 12a4 4 0 1 0-3.999-4A4 4 0 0 0 10 12Zm9-4a3 3 0 1 1-3-3 3 3 0 0 1 3 3ZM3 20a5 5 0 0 1 9.584-2.001M15 15.126a4.5 4.5 0 0 1 6.001 4.247" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>;
}
