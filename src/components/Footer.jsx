const glass = "backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10";

export function Footer() {
  return (
    <footer className="py-12">
      <div className={`mx-auto max-w-6xl px-4 ${glass} rounded-2xl p-6 text-center text-white/60 shadow-lg`}>
        © {new Date().getFullYear()} Mohamed Adan Ahmed. All rights reserved.
      </div>
    </footer>
  );
}