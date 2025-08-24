import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { AnimatedUnderline } from "./AnimatedUnderline";

const glass = "backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10";

export function Hero() {
  const roles = ["Frontend Developer", "React Enthusiast", "UI/UX Tinkerer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="pt-16 md:pt-24 pb-24">
      <div className={`grid md:grid-cols-2 items-center gap-8 ${glass} rounded-3xl p-6 md:p-10 shadow-xl`}> 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Mohamed</span>
          </h1>
          <AnimatedUnderline>
            <span className="text-lg md:text-2xl text-white/80">{roles[index]}</span>
          </AnimatedUnderline>
          <p className="mt-4 text-white/70 max-w-prose">
            I build delightful, performant interfaces with React, Tailwind, and a sprinkle of motion.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" onClick={(e)=>{e.preventDefault();document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})}} className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium shadow-lg hover:opacity-90">
              View Projects
            </a>
            <a href="#contact" onClick={(e)=>{e.preventDefault();document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}} className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10">
              Contact Me
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-white/80">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Github /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin /></a>
            <a href="mailto:me@example.com" className="hover:text-white"><Mail /></a>
            <a href="https://yourdomain.com" target="_blank" rel="noreferrer" className="hover:text-white"><Globe /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 blur opacity-60" />
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop" 
              alt="Profile"
              className="relative rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-white/20 shadow-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}