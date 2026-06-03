import { Github } from "lucide-react";

export default function Credit() {
  return (
    <footer className="w-full py-8 border-t border-white/5 bg-black/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-muted/60 text-xs font-bold uppercase tracking-[0.2em]">
          Designed & Developed by
        </div>
        <a
          href="https://github.com/CODER-RAHUL9038"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 rounded-2xl glass hover:bg-white/10 transition-all duration-500"
        >
          <div className="p-2 rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
            <Github className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
            Rahul Shaw
          </span>
        </a>
        <p className="text-muted/40 text-[10px] font-medium uppercase tracking-widest mt-2">
          © 2026 Weather Sky • Premium Forecast Experience
        </p>
      </div>
    </footer>
  );
}
