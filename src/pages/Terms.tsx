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
          These Terms of Service (&quot;Terms&quot;) govern your use of services provided by
          GNT Security (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By engaging our
          services or using our site, you agree to these Terms.
        </motion.p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <FileText className="w-6 h-6 text-blue-600" />
          1. Relationship To Other Agreements
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          These Terms provide a general framework for our services. If you sign a separate
          master services agreement, statement of work, order form, or similar contract with
          us, that document will control where it conflicts with these Terms. For certain
          regulated environments, additional agreements (such as business associate
          agreements) may also apply.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Shield className="w-6 h-6 text-blue-600" />
          2. Services We Provide
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We provide managed IT, cybersecurity, network, consulting, and related services,
          which may include:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Managed workstation, server, and device support.</li>
          <li>Managed network and Wi-Fi infrastructure.</li>
          <li>Remote monitoring and management (RMM) and security tooling.</li>
          <li>Backup, continuity, and incident response assistance.</li>
          <li>Consulting, projects, and onboarding/offboarding support.</li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base">
          Our model is remote-first. On-site work is scheduled with reasonable notice and
          may involve travel charges. We may coordinate with trusted third-party providers
          to assist with local work or coverage where appropriate.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <FileText className="w-6 h-6 text-blue-600" />
          3. Eligibility And Customer Type
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We primarily serve organizations, including businesses and similar entities. In some
          cases we also support home offices or residential environments associated with our
          business clients (for example, owners, executives, or remote staff).
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          By engaging our services, you represent that you are authorized to act on behalf of
          the organization or individual you represent, and that you have the authority to
          grant us the access and information required to perform our work.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Shield className="w-6 h-6 text-blue-600" />
          4. Your Responsibilities
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          To allow us to provide reliable services, you agree to:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Provide accurate information about your environment and key contacts.</li>
          <li>Maintain appropriate licenses for software and services you use.</li>
          <li>
            Follow reasonable security practices we recommend, such as enabling multi-factor
            authentication and using supported operating systems.
          </li>
          <li>
            Notify us promptly about incidents, changes, or projects that affect systems we
            manage.
          </li>
          <li>
            Ensure that third-party vendors we must coordinate with are authorized to work
            with us where necessary.
          </li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base">
          Certain responsibilities, such as business continuity planning, data classification,
          and internal policy enforcement, remain with you unless otherwise agreed in writing.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <FileText className="w-6 h-6 text-blue-600" />
          5. Monitoring, Tooling, And Access
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          To deliver managed services, we may deploy and manage agents, security tools, and
          network configurations in your environment. You authorize us to:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Install and manage RMM, security, and backup agents on covered systems.</li>
          <li>
            Collect telemetry, logs, and alerts reasonably necessary to monitor, secure, and
            support those systems.
          </li>
          <li>
            Access systems remotely during agreed support windows or in response to incidents.
          </li>
          <li>
            Adjust configurations, apply updates, and implement changes consistent with
            documented standards and agreed projects.
          </li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base">
          We will not intentionally access personal data beyond what is reasonably necessary to
          provide services, support incidents, or meet legal obligations. For more information,
          see our Privacy Policy.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Shield className="w-6 h-6 text-blue-600" />
          6. Backups, Continuity, And Shared Responsibility
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Where backup and continuity services are in scope, we will configure and monitor
          backup jobs for agreed systems using selected technologies. Unless otherwise stated
          in writing, you remain responsible for:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Selecting which systems and data are in scope for backup.</li>
          <li>Reviewing backup and recovery reports we provide.</li>
          <li>Notifying us when critical data locations change.</li>
          <li>Understanding how long data is retained according to the chosen plan.</li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base">
          No backup or continuity strategy can eliminate all risk. Recovery time and recovery
          point objectives are targets, not guarantees, unless explicitly guaranteed in a signed
          agreement with defined remedies.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <FileText className="w-6 h-6 text-blue-600" />
          7. Third-Party Services
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Our services often depend on third-party platforms and vendors, such as cloud
          providers, networking vendors, security tools, domain registrars, and email
          platforms. Those services are subject to their own terms and conditions, which you
          may be required to accept directly.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          We are not responsible for outages, failures, or changes in functionality caused by
          third-party providers, but we will make reasonable efforts to work with them to
          restore service where possible.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Scale className="w-6 h-6 text-blue-600" />
          8. Fees, Billing, And Changes
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Fees, billing cycles, and included services are defined in your quote, order form, or
          service agreement. Unless otherwise stated:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Recurring services are billed in advance on a regular schedule.</li>
          <li>Project and time-and-materials work are billed as incurred.</li>
          <li>
            You agree to pay all undisputed invoices by the due date indicated. Late payments
            may be subject to reasonable late fees or suspension of service.
          </li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base">
          We may adjust pricing for recurring services upon renewal or with advance notice as
          permitted in your primary service agreement.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <AlertTriangle className="w-6 h-6 text-blue-600" />
          9. Warranties And Disclaimers
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We will use reasonable skill and care consistent with good industry practice when
          delivering our services. However, except where prohibited by law or expressly stated
          in a signed agreement:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Services are provided &quot;as is&quot; and &quot;as available&quot;.</li>
          <li>
            We do not guarantee that systems will be free from all failures, vulnerabilities,
            or incidents.
          </li>
          <li>
            We do not guarantee that security measures, backups, or monitoring will prevent all
            unauthorized access, data loss, or other harm.
          </li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base">
          Any implied warranties, including warranties of merchantability, fitness for a
          particular purpose, or non-infringement, are disclaimed to the fullest extent
          permitted by law.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Scale className="w-6 h-6 text-blue-600" />
          10. Limitation Of Liability
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          To the fullest extent permitted by law, in no event will GNT Security be liable for:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Indirect, incidental, special, consequential, or punitive damages.</li>
          <li>Loss of profits, revenue, data, or business opportunities.</li>
          <li>Damages arising from third-party services or your failure to follow guidance.</li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base">
          Our aggregate liability for all claims arising out of or related to the services will
          not exceed the amount you paid to us for the services giving rise to the claim during
          the twelve (12) months immediately preceding the event first giving rise to the claim,
          unless a different amount is stated in a signed agreement.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          These limitations apply regardless of the legal theory of liability and even if we
          have been advised of the possibility of such damages. Some jurisdictions do not allow
          certain limitations, so some of the above may not apply to you.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Shield className="w-6 h-6 text-blue-600" />
          11. Indemnification
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          You agree to indemnify and hold harmless GNT Security from and against claims,
          damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out
          of or related to:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>Your misuse of the services.</li>
          <li>Your violation of these Terms or applicable law.</li>
          <li>
            Any claim that systems, data, or content you provide violate the rights of a third
            party.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Scale className="w-6 h-6 text-blue-600" />
          12. Dispute Resolution And Arbitration
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We aim to resolve issues quickly and practically. If a dispute arises, you agree to
          first contact us and attempt to resolve the matter informally.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          If we cannot resolve a dispute informally, and unless prohibited by applicable law,
          any dispute, claim, or controversy arising out of or relating to these Terms or our
          services will be resolved by binding arbitration, rather than in court, in accordance
          with the rules of a recognized arbitration organization. The arbitration will take
          place in or near our primary business location, unless we both agree otherwise.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          You and we each waive any right to a jury trial or to participate in a class or
          representative action, to the extent permitted by law. Each party may bring claims
          only in its individual capacity.
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          Notwithstanding the foregoing, either party may seek temporary injunctive or
          equitable relief in court to protect confidential information, intellectual property,
          or security interests while arbitration is pending.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <FileText className="w-6 h-6 text-blue-600" />
          13. Termination
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Term and termination conditions are typically defined in your primary agreement. In
          addition, we may suspend or terminate services immediately if:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1">
          <li>You materially breach these Terms and do not cure within a reasonable time.</li>
          <li>
            Your use of the services creates a security risk or legal risk that is not
            reasonably addressable by other means.
          </li>
          <li>Required third-party services are no longer available or legally permitted.</li>
        </ul>
        <p className="text-gray-700 text-sm md:text-base">
          Upon termination, we will cooperate in a reasonable transition of services as agreed,
          which may be subject to additional fees.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Scale className="w-6 h-6 text-blue-600" />
          14. Governing Law
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          These Terms are governed by the laws of the State of Ohio and the United States of
          America, without regard to conflict of law principles, except where another
          jurisdiction&apos;s law is required by applicable regulation or written agreement.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <FileText className="w-6 h-6 text-blue-600" />
          15. Changes To These Terms
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          We may update these Terms from time to time. If we make material changes, we will
          update the &quot;Last updated&quot; date and may provide additional notice, such as
          by email or service notification, where appropriate. Your continued use of our
          services after changes become effective constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section className="space-y-6 pb-8">
        <h2 className="flex items-center gap-2 text-2xl font-semibold">
          <Shield className="w-6 h-6 text-blue-600" />
          16. Contact
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          If you have questions about these Terms or our services, you can contact us at:
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
