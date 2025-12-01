import { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";

export default function GitHub() {
  useEffect(() => {
    window.location.href = "https://github.com/gntsecurity";
  }, []);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl border border-slate-200 bg-white px-8 py-10 text-center shadow-xl max-w-xl w-full"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
          <Github className="h-6 w-6" />
        </div>
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">
          Redirecting to GitHub
        </h1>
        <p className="mb-4 text-sm text-gray-600">
          Taking you to the gntsecurity GitHub organization where the tooling and infrastructure
          live. If you are not redirected automatically, use the button below.
        </p>
        <a
          href="https://github.com/gntsecurity"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          <Github className="h-4 w-4" />
          Open GitHub
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>
    </div>
  );
}
