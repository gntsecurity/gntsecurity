import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="space-y-24">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Questions? Partnerships? System needs? We’ll respond fast — and bring clarity with us.
        </motion.p>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto">
        <motion.form
          className="space-y-6 bg-white p-8 rounded-xl shadow-md border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("This form is not wired yet. Ready to hook it up to email or API.");
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your project, need, or question..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* CTA */}
      <section className="text-center bg-gradient-to-br from-gray-50 to-white py-20 px-4 rounded-2xl shadow-inner">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let’s build something secure, together.
        </motion.h2>
        <a
          href="mailto:info@gntsecurity.com"
          className="inline-block mt-4 px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Email Us Directly
        </a>
      </section>
    </div>
  );
}
