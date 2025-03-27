import { motion } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      className="flex-1 px-4 pt-4 pb-24 md:px-6 md:py-16 max-w-6xl mx-auto w-full"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.main>
  );
}
