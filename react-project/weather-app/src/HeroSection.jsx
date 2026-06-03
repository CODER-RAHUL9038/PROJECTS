import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  Sun, 
  Cloud, 
  CloudRain, 
  Zap, 
  Snowflake, 
  CloudDrizzle,
  Moon,
  CloudMoon,
  ChevronDown
} from "lucide-react";

export default function HeroSection({ weather }) {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    if (!weather) return;
    
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const cityTime = new Date(utc + (weather.timezone * 1000));
      
      setLocalTime(cityTime.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [weather]);

  if (!weather) return null;

  const { name, sys, main, weather: conditions, dt } = weather;
  const condition = conditions[0].main;
  const isNight = dt < sys.sunrise || dt > sys.sunset;

  const weatherIcons = {
    Clear: isNight ? <Moon className="w-full h-full text-blue-200" /> : <Sun className="w-full h-full text-yellow-400" />,
    Clouds: isNight ? <CloudMoon className="w-full h-full text-slate-400" /> : <Cloud className="w-full h-full text-blue-100" />,
    Rain: <CloudRain className="w-full h-full text-blue-500" />,
    Thunderstorm: <Zap className="w-full h-full text-yellow-300" />,
    Snow: <Snowflake className="w-full h-full text-white" />,
    Drizzle: <CloudDrizzle className="w-full h-full text-blue-300" />,
  };

  return (
    <div className="w-full flex justify-center px-4 py-6 md:py-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1100px] glass-card rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-white/12 p-8 md:p-10 relative group"
      >
        {/* Inner Glow Layer */}
        <div className="absolute inset-0 bg-white/[0.05] pointer-events-none" />
        <div className="absolute inset-px rounded-[31px] border border-white/[0.08] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-lg">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-black uppercase tracking-widest text-white/90">
              {name}, {sys.country}
            </span>
          </div>

          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 shadow-lg">
            <Clock className="w-4 h-4 text-secondary" />
            <span className="text-sm font-black uppercase tracking-widest text-white/90">
              {localTime}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center relative z-10 text-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 md:w-32 md:h-32 mb-6 filter drop-shadow-[0_0_30px_rgba(79,140,255,0.4)]"
          >
            {weatherIcons[condition] || weatherIcons.Clouds}
          </motion.div>

          <h1 className="text-7xl md:text-8xl lg:text-[100px] font-black text-white tracking-tighter mb-2 leading-none drop-shadow-2xl">
            {Math.round(main.temp)}°
          </h1>

          <p className="text-2xl md:text-3xl font-extrabold text-white/80 capitalize mb-8 tracking-tight">
            {conditions[0].description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-muted/80 w-full max-w-lg">
            <div className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] opacity-50">Feels Like</span>
              <span className="text-2xl font-black text-white">{Math.round(main.feels_like)}°</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] opacity-50">High / Low</span>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-white">H: {Math.round(main.temp_max)}°</span>
                <span className="text-white/20 font-light text-xl">•</span>
                <span className="text-2xl font-black text-white">L: {Math.round(main.temp_min)}°</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center opacity-20 group-hover:opacity-50 transition-opacity">
           <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}
