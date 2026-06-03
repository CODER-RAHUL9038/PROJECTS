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
    <div className="w-full flex justify-center px-4 py-8 md:py-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1100px] glass-card rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-white/12 p-8 md:p-12 relative group"
      >
        {/* Inner Glow Effect */}
        <div className="absolute inset-0 bg-white/[0.04] pointer-events-none" />
        
        {/* Top Row: Meta Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-16 relative z-10">
          <div className="flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold tracking-tight text-white/90">
              {name}, {sys.country}
            </span>
          </div>

          <div className="flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full border border-white/10">
            <Clock className="w-4 h-4 text-secondary" />
            <span className="text-sm font-bold tracking-tight text-white/90">
              {localTime}
            </span>
          </div>
        </div>

        {/* Center Section: Animated Icon & Primary Stats */}
        <div className="flex flex-col items-center relative z-10 text-center">
          {/* Animated Weather Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 md:w-32 md:h-32 mb-8 filter drop-shadow-[0_0_20px_rgba(79,140,255,0.3)]"
          >
            {weatherIcons[condition] || weatherIcons.Clouds}
          </motion.div>

          {/* Temperature */}
          <h1 className="text-5xl md:text-7xl lg:text-[72px] font-black text-white tracking-tighter mb-4 leading-none">
            {Math.round(main.temp)}°
          </h1>

          {/* Condition Description */}
          <p className="text-2xl md:text-3xl font-bold text-white/90 capitalize mb-8">
            {conditions[0].description}
          </p>

          {/* Secondary Stats Row */}
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-muted/80">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Feels Like</span>
              <span className="text-lg font-bold text-white">{Math.round(main.feels_like)}°</span>
            </div>
            
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            
            <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">High / Low</span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-white">H: {Math.round(main.temp_max)}°</span>
                <span className="text-white/20">•</span>
                <span className="text-lg font-bold text-white">L: {Math.round(main.temp_min)}°</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Reveal Indicator */}
        <div className="mt-16 flex flex-col items-center opacity-30 group-hover:opacity-60 transition-opacity">
           <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}
