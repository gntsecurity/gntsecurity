import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Users } from "lucide-react";

function useNoIndex() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex,nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);
}

export default function Customers() {
  useNoIndex();

  return (
    <div className="space-y-16">
      <section className="text-center max-w-4xl mx-auto space-y-5 pt-16">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Customers
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Customer-specific resources, contacts, and support references.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-center gap-2 text-gray-900 mb-6"
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Users className="h-5 w-5 text-slate-900" />
          <h2 className="text-2xl font-semibold">Customer Directory</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              to="/customers/AACT"
              className="group block gnt-card-solid p-6 transition hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-2">
                  <p className="text-xs text-gray-500">Customer</p>
                  <h3 className="text-xl font-semibold text-slate-900">AACT</h3>
                  <p className="text-sm text-gray-700">Contacts and customer-specific details.</p>
                </div>
                <div className="shrink-0 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <Building2 className="h-6 w-6 text-slate-900" />
                </div>
              </div>
              <div className="mt-5 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                Open customer page
              </div>
            </Link>
          </motion.div>

          <motion.div
            className="gnt-card p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <p className="text-xs text-gray-500">More coming soon</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">Additional customers</h3>
            <p className="text-sm text-gray-700 mt-2">
              This area will expand as customer pages are added.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}