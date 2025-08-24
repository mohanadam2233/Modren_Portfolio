import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ theme, setTheme }) {
  const next = theme === "dark" ? "light" : "dark";
  
  return (
    <button
      className="p-2 rounded-xl hover:bg-white/10 transition"
      onClick={() => setTheme(next)}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}