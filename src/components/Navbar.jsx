import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const glass = "backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10";

export function Navbar({ open, setOpen, theme, setTheme }) {
  const onNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className={`w-full ${glass} rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg`}> 
          <a onClick={() => onNavClick("home")} className="cursor-pointer font-semibold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">MAA</span>
          </a>

          <nav className="hidden md:flex gap-6 text-sm">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => onNavClick(s.id)}
                className="hover:text-white/90 text-white/70 transition-colors"
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <button
              className="md:hidden p-2 rounded-xl hover:bg-white/10 transition"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div className={`mt-2 md:hidden ${glass} rounded-2xl p-3 shadow-lg`}> 
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => onNavClick(s.id)}
                className="block w-full text-left px-3 py-2 rounded-xl hover:bg-white/10"
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}