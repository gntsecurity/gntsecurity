import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="space-y-24">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get Support Or Request Service
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Serving Ohio businesses and home IT needs. Reach out with issues, projects, or questions
          about managed service plans.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-20">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 border rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold">Direct Contact</h2>
            <div className="space-y-1 text-sm text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Phone:</span>{" "}
                <a href="tel:+19376715597" className="text-blue-600 hover:underline">
                  937.671.5597
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900">Sales & General:</span>{" "}
                <a
                  href="mailto:sales@gntsecurity.com"
                  className="text-blue-600 hover:underline break-all"
                >
                  sales@gntsecurity.com
                </a>
              </p>
            </div>
            <p className="text-sm text-gray-700">
              If this is an urgent outage or security concern, call the number above and include a
              short description of what is down.
            </p>
          </div>
          <div className="text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-1">Service Area</p>
            <p>Onsite availability within Ohio where reasonable. Remote support is available more broadly.</p>
          </div>
        </motion.div>

        <motion.form
          className="space-y-6 bg-white border rounded-2xl p-8 shadow-md"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-2">Send A Message</h2>
          <p className="text-sm text-gray-600 mb-4">
            Use this form to describe your environment, issue, or project. You will receive a reply
            from GNT Security directly.
          </p>
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Support request, project, or question"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Details About Your Environment Or Issue
            </label>
            <textarea
              rows={5}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Number of devices, type of business or home setup, what is going wrong, and any deadlines."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
          <p className="text-xs text-gray-500">
            Submitting this form does not create a support contract yet. GNT Security will respond
            to gather more details and provide options.
          </p>
        </motion.form>
      </section>
    </div>
  );
}
