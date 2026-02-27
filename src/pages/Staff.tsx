import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";

export default function Staff() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 space-y-10">
      <section className="space-y-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Staff Portal
        </motion.h1>

        <p className="text-gray-700">
          Internal links for GNT Security staff. Access is restricted.
        </p>
      </section>

      <section className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Lock className="w-4 h-4 text-blue-600" />
          Protected by Cloudflare Access
        </div>

        <a
          href="https://gntsecurity.rmmservices.net/auth#login"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Open RMM Login <ExternalLink className="w-4 h-4" />
        </a>

        <p className="text-sm text-gray-600">
          If you cannot access this page, request access from an admin.
        </p>
      </section>
    </div>
  );
}