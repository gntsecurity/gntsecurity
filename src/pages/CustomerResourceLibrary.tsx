import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Shield,
  Network,
  Laptop,
  LifeBuoy,
  Search,
} from "lucide-react";

export default function CustomerResourceLibrary() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Customer Resource Library
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          A central home for guides, policies, and how-to resources for your staff.
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
          <BookOpen className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">End-User Guides</h2>
          <p className="text-gray-700">
            Simple step-by-step walkthroughs for common tasks like VPN access, password resets, and new-hire setup.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Shield className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Security &amp; Compliance</h2>
          <p className="text-gray-700">
            Policies, standards, and quick-reference checklists your team can reference when handling sensitive data.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <LifeBuoy className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Support Resources</h2>
          <p className="text-gray-700">
            Information on how to request support, escalate issues, and see status updates on larger projects.
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
          <h2 className="text-2xl font-semibold">What You Will Find Here</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Printable quick-start guides for new employees</li>
            <li>• Remote work and acceptable use guidelines</li>
            <li>• Security awareness and phishing tips</li>
            <li>• Device onboarding and offboarding checklists</li>
            <li>• Links to vendor portals and training</li>
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
            <Laptop className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Role-Based Content</h3>
              <p className="text-gray-700">
                Resources can be tailored for executives, managers, frontline staff, and technical teams.
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <Network className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Shared With Your Team</h3>
              <p className="text-gray-700">
                We can link this library from intranets, HR systems, or onboarding workflows for easy access.
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <FileText className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Always Current</h3>
              <p className="text-gray-700">
                Documentation is reviewed and updated as your environment, tools, and policies evolve.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto pb-20">
        <motion.div
          className="p-8 border rounded-2xl bg-gray-50 flex gap-4 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Search className="w-7 h-7 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Looking For Something Specific?</h2>
            <p className="text-gray-700">
              If you need a guide or template that is not listed yet, we can create it as part of your managed
              services engagement.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
