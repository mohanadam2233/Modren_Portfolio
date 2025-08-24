import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { GradientGlow } from "./components/GradientGlow";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  // theme handler
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const t = stored || (prefersDark ? "dark" : "light");
    setTheme(t);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 selection:bg-indigo-500/40">
      <GradientGlow />
      <Navbar open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} />
      <main className="mx-auto max-w-6xl px-4">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}