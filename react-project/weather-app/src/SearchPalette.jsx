import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, X, History, MapPin, Loader2 } from "lucide-react";

export default function SearchPalette({ isOpen, setIsOpen, city, setCity, getWeather, loading, recentSearches = [] }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setInputValue("");
    }
  }, [isOpen]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    setCity(inputValue);
    getWeather(inputValue);
    setIsOpen(false);
  };

  const handleRecentClick = (searchCity) => {
    setCity(searchCity);
    getWeather(searchCity);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100]"
          />

          {/* Search Panel */}
          <div className="fixed inset-0 flex items-start justify-center pt-[15vh] px-4 z-[101] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, y: -20, filter: "blur(10px)" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl glass-card rounded-[2rem] overflow-hidden pointer-events-auto shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)]"
            >
              <form onSubmit={handleSubmit} className="relative flex items-center p-6 border-b border-white/10">
                <Search className="w-6 h-6 text-primary mr-4" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search city..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-2xl font-semibold text-white placeholder:text-muted/30"
                />
                <div className="flex items-center gap-2">
                  {loading ? (
                    <Loader2 className="w-5 h-5 text-primary animate-spin" />
                  ) : (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-muted/60 text-[10px] font-black uppercase tracking-tighter">
                      <Command className="w-3 h-3" />
                      <span>Enter</span>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-muted" />
                  </button>
                </div>
              </form>

              <div className="p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                {inputValue ? (
                  <div className="px-4 py-2">
                    <div className="flex items-center gap-3 p-4 rounded-2xl hover:bg-primary/10 cursor-pointer group transition-all" onClick={handleSubmit}>
                      <MapPin className="w-5 h-5 text-muted group-hover:text-primary" />
                      <span className="text-lg font-medium text-white group-hover:translate-x-1 transition-transform">
                        Search for "{inputValue}"
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 p-2">
                    {recentSearches.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 px-4 mb-3">
                          <History className="w-4 h-4 text-muted" />
                          <span className="text-xs font-bold uppercase tracking-widest text-muted/60">Recent Searches</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {recentSearches.map((s, i) => (
                            <button
                              key={i}
                              onClick={() => handleRecentClick(s)}
                              className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-primary/5 text-left transition-all group"
                            >
                              <span className="text-white font-semibold group-hover:text-primary transition-colors">{s}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <span className="px-4 text-xs font-bold uppercase tracking-widest text-muted/40 mb-3 block">Quick Shortcuts</span>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 px-2">
                        {['London', 'New York', 'Tokyo', 'Paris'].map(city => (
                          <button
                            key={city}
                            onClick={() => handleRecentClick(city)}
                            className="px-4 py-2 rounded-xl bg-white/5 text-sm font-medium text-muted hover:text-white hover:bg-white/10 transition-all"
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
