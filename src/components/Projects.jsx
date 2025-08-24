import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "3D Product Showcase",
    desc: "Interactive product viewer with Three.js and responsive UI.",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
    tags: ["Three.js", "React", "R3F"],
    link: "#",
  },
  {
    title: "E‑Commerce Dashboard",
    desc: "Analytics, charts, and order management with clean UX.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Vite", "Tailwind", "Charts"],
    link: "#",
  },
  {
    title: "Portfolio v2",
    desc: "Modern glassmorphism portfolio with framer-motion.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    tags: ["Framer Motion", "UI", "A11y"],
    link: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}