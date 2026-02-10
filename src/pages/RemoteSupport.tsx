import { motion } from "framer-motion";
import { Laptop2, PhoneCall, MousePointer2, ShieldCheck, Download } from "lucide-react";

export default function RemoteSupport() {
  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto pt-20 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Remote Support Session
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Use this page when directed by GNT Security to start a secure remote support session.
          A technician will guide you through the steps and stay on the line while the session is active.
        </motion.p>
      </section>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-10 items-start pb-20">
        <motion.div
          className="bg-white border rounded-2xl p-6 shadow-sm space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <Laptop2 className="w-7 h-7 text-blue-600" />
            <h2 className="text-xl font-semibold">How It Works</h2>
          </div>
          <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside">
            <li>Call GNT Security or speak with your technician so they know you are ready.</li>
            <li>Click the button below to open the remote support site in a new window.</li>
            <li>Run the small support application when prompted and approve the connection.</li>
            <li>Stay at your computer while the technician works and follow any instructions given.</li>
            <li>When the work is complete, the technician will disconnect and the session will close.</li>
          </ol>
          <div className="mt-4">
            <a
              href="https://gntsecurity.screenconnect.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg text-base font-semibold hover:bg-blue-700 transition"
            >
              <Download className="w-5 h-5" />
              Launch Remote Support
            </a>
            <p className="text-xs text-gray-500 mt-2">
              Only start a remote session when working directly with GNT Security. Close the session when finished.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-50 border rounded-2xl p-6 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <PhoneCall className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg font-semibold">Contact During Session</h2>
          </div>
          <p className="text-sm text-gray-700">
            If something does not look right or you are unsure about a prompt, stop and ask the technician before
            approving anything.
          </p>
          <div className="space-y-1 text-sm text-gray-800">
            <p>
              Phone:{" "}
              <a href="tel:+15104690947" className="text-blue-600 hover:underline">
                (510) 469-0947
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:sales@gntsecurity.com"
                className="text-blue-600 hover:underline break-all"
              >
                sales@gntsecurity.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-3 pt-4">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <p className="text-xs text-gray-600">
              GNT Security will never ask you to share passwords over the phone or email. Remote access is used only
              for support with your permission.
            </p>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <MousePointer2 className="w-5 h-5 text-blue-600" />
            <p className="text-xs text-gray-600">
              You can see everything happening on your screen. If you need to stop, you can close the session window at
              any time.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
