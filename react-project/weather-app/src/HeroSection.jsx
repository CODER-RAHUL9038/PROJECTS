import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Sun, Cloud, CloudRain, Zap, Snowflake, CloudDrizzle } from "lucide-react";

export default function HeroSection({ weather }) {
  if (!weather) return null;

  const { name, sys, main, weather: conditions } = weather;
  const condition = conditions[0].main;

  const weatherIcons = {
    Clear: <Sun className="w-20 h-20 md:w-32 md:h-32 text-yellow-400" />,
    Clouds: <Cloud className="w-20 h-20 md:w-32 md:h-32 text-blue-200" />,
    Rain: <CloudRain className="w-20 h-20 md:w-32 md:h-32 text-blue-500" />,
    Thunderstorm: <Zap className="w-20 h-20 md:w-32 md:h-32 text-yellow-300" />,
    Snow: <Snowflake className="w-20 h-20 md:w-32 md:h-32 text-white" />,
    Drizzle: <CloudDrizzle className="w-20 h-20 md:w-32 md:h-32 text-blue-300" />,
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col items-center md:items-start text-center md:text-left space-y-4"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border-white/5 text-primary text-xs font-black uppercase tracking-widest">
          <MapPin className="w-3 h-3" />
          <span>{name}, {sys.country}</span>
        </div>
        
        <div className="space-y-1">
          <h1 className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter text-white drop-shadow-2xl">
            {Math.round(main.temp)}°
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-3xl md:text-4xl font-extrabold text-white/90 capitalize">
              {conditions[0].description}
            </span>
            <span className="text-xl md:text-2xl font-medium text-muted">
              Feels like <span className="text-white">{Math.round(main.feels_like)}°</span>
            </span>
          </div>
        </div>

        <p className="flex items-center gap-2 text-muted font-bold tracking-tight">
          <Calendar className="w-4 h-4" />
          {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 15 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-150 animate-pulse" />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 filter drop-shadow-[0_20px_60px_rgba(79,140,255,0.5)]"
        >
          {weatherIcons[condition] || weatherIcons.Clouds}
        </motion.div>
      </motion.div>
    </div>
  );
}
