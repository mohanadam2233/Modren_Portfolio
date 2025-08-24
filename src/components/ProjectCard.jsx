import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const glass = "backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10";

export function ProjectCard({ title, desc, img, tags, link }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${glass} rounded-3xl overflow-hidden group shadow-xl`}
    >
      <div className="relative h-44 overflow-hidden">
        <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <a href={link} target="_blank" rel="noreferrer" className="shrink-0 inline-flex items-center gap-1 text-sm px-3 py-1 rounded-xl border border-white/20 hover:bg-white/10">
            Visit <ExternalLink size={16} />
          </a>
        </div>
        <p className="mt-2 text-white/70 text-sm">{desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-lg border border-white/20 bg-white/5">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}