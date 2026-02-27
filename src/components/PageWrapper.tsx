import { motion } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      className="flex-1 pb-28 md:pb-16"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="gnt-container pt-8 md:pt-12">{children}</div>
    </motion.main>
  );
}
