import { motion } from "framer-motion";
import {
  Briefcase,
  Target,
  GraduationCap,
  Shield,
  Laptop,
  MapPin,
  Users,
} from "lucide-react";

export default function Careers() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Careers at GNT Security
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Join a team focused on doing IT the right way for growing organizations across Ohio and beyond.
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
          <h2 className="text-xl font-semibold mb-2">Security-First Mindset</h2>
          <p className="text-gray-700">
            We specialize in secure, well-documented environments. If you care about building things correctly, you
            will fit in.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Laptop className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Modern Tooling</h2>
          <p className="text-gray-700">
            Work with current-generation RMM, security, and collaboration platforms instead of fighting legacy tools.
          </p>
        </motion.div>

        <motion.div
          className="p-8 border rounded-2xl bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Users className="w-10 h-10 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Collaborative Team</h2>
          <p className="text-gray-700">
            Small, focused teams that share knowledge, coach each other, and put the client experience first.
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
          <h2 className="text-2xl font-semibold">Who We Look For</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Technicians who enjoy solving problems and documenting solutions</li>
            <li>• Engineers who can design, not just deploy, secure infrastructure</li>
            <li>• People who communicate clearly with non-technical stakeholders</li>
            <li>• Lifelong learners who stay current with the Microsoft and security ecosystem</li>
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
            <Target className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Growth &amp; Development</h3>
              <p className="text-gray-700">
                Opportunities for certifications, lab time, and exposure to project work as you gain experience.
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <GraduationCap className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Early-Career Talent</h3>
              <p className="text-gray-700">
                We welcome candidates who have the right mindset and fundamentals, even if they are early in their
                careers.
              </p>
            </div>
          </div>
          <div className="p-6 border rounded-2xl bg-white shadow-sm flex gap-4 items-start">
            <MapPin className="w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Hybrid &amp; On-Site Work</h3>
              <p className="text-gray-700">
                Roles may include a mix of remote work, on-site client visits, and data center or office time.
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
          <h2 className="text-2xl font-semibold mb-4">How To Apply</h2>
          <p className="text-gray-700 mb-2">
            If you are interested in future opportunities, send a brief introduction and your resume to our team. We
            keep strong candidates in mind as we grow.
          </p>
          <p className="text-gray-700">
            Please highlight any experience with Microsoft 365, networking, security tools, or working with
            small-to-mid sized organizations.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
