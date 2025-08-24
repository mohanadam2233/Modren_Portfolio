import { motion } from "framer-motion";

const glass = "backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10";

export function SkillBar({ name, level }) {
  return (
    <div className={`${glass} rounded-2xl p-4 shadow-lg`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-white/70 text-sm">{level}%</span>
      </div>
      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-3 bg-gradient-to-r from-indigo-500 to-cyan-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}