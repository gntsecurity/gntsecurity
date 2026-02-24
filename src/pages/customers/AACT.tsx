import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";

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

export default function AACT() {
  useNoIndex();

  return (
    <div className="space-y-20">
      <section className="text-center max-w-4xl mx-auto space-y-5 pt-16">
        <motion.p
          className="text-sm text-gray-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          Customer
        </motion.p>
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          AACT
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Customer contacts and quick reference information.
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
          <User className="w-5 h-5 text-blue-600" />
          <h2 className="text-2xl font-semibold">Primary Contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px,1fr] gap-10 items-start">
          <motion.div
            className="bg-white border rounded-2xl shadow-md p-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <img
                src="/Employees/zach.jfif"
                alt="Zach Laymon"
                className="h-16 w-16 rounded-2xl object-cover border"
              />
              <div className="min-w-0">
                <p className="text-lg font-semibold text-gray-900">Zach Laymon</p>
                <p className="text-sm text-gray-600">IT Systems Administrator</p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-blue-600 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Email</p>
                  <a
                    href="mailto:ZLaymon@gntsecurity.com"
                    className="text-blue-600 hover:underline break-all font-semibold"
                  >
                    ZLaymon@gntsecurity.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl bg-gray-50 border p-6">
              <p className="text-sm font-semibold text-gray-900 mb-2">About Zach</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Zach is based in Michigan, United States. Outside of work, he enjoys sports, video
                games, and spending time with loved ones.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <p className="text-sm font-semibold text-gray-900 mb-2">Location details</p>
              <p className="text-sm text-gray-700">Location and site information will be added here later.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}