import { SkillBar } from "./SkillBar";

const skills = [
  { name: "React", level: 90 },
  { name: "TailwindCSS", level: 88 },
  { name: "JavaScript", level: 85 },
  { name: "Framer Motion", level: 80 },
  { name: "Node.js", level: 70 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((s) => (
          <SkillBar key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}