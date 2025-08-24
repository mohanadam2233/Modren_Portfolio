import { motion } from "framer-motion";

export function AnimatedUnderline({ children }) {
  return (
    <div className="inline-block mt-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className="h-[2px] bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"
      />
      <div className="mt-2">{children}</div>
    </div>
  );
}