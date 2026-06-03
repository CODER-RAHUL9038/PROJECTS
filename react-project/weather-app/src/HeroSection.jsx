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
  CloudMoon
} from "lucide-react";

export default function HeroSection({ weather }) {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    if (!weather) return;
    
    const updateTime = () => {
      // Calculate local time based on timezone offset (in seconds)
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

  const themeColor = {
    Clear: "from-yellow-400/20 to-orange-500/0",
    Clouds: "from-blue-400/20 to-slate-500/0",
    Rain: "from-blue-600/20 to-cyan-500/0",
    Thunderstorm: "from-purple-600/20 to-blue-500/0",
    Snow: "from-white/20 to-blue-100/0",
  }[condition] || "from-primary/20 to-secondary/0";

  return (
    <div className="relative w-full py-16 md:py-32 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glow Centerpiece */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial ${themeColor} blur-[120px] opacity-50 rounded-full pointer-events-none`} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center"
      >
        {/* Top Metadata Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Live Forecast</span>
          </motion.div>
          
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-white/90">
            <MapPin className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{name}, {sys.country}</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-white/90">
            <Clock className="w-3 h-3 text-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{localTime}</span>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 md:gap-0 w-full">
          
          {/* Left info */}
          <div className="hidden lg:flex flex-col items-end text-right space-y-6">
            <div className="space-y-1">
              <p className="text-muted text-xs font-black uppercase tracking-widest">Description</p>
              <h3 className="text-2xl font-bold text-white capitalize">{conditions[0].description}</h3>
            </div>
            <div className="space-y-1">
              <p className="text-muted text-xs font-black uppercase tracking-widest">High / Low</p>
              <h3 className="text-2xl font-bold text-white">
                H:{Math.round(main.temp_max)}° <span className="text-white/30 mx-1">/</span> L:{Math.round(main.temp_min)}°
              </h3>
            </div>
          </div>

          {/* Centerpiece: Temp & Icon */}
          <div className="relative flex flex-col items-center">
             {/* Huge Icon Layer (Depth) */}
             <motion.div
               animate={{ 
                 y: [0, -20, 0],
                 rotate: [0, 5, 0]
               }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 opacity-20 blur-[2px] pointer-events-none"
             >
               {weatherIcons[condition] || weatherIcons.Clouds}
             </motion.div>

             {/* Huge Temperature */}
             <div className="relative">
                <motion.h2 
                  initial={{ letterSpacing: "0.2em", opacity: 0 }}
                  animate={{ letterSpacing: "-0.05em", opacity: 1 }}
                  transition={{ duration: 1.2, ease: "circOut" }}
                  className="text-[10rem] md:text-[16rem] font-black leading-none text-white tracking-tighter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent"
                >
                  {Math.round(main.temp)}°
                </motion.h2>
                
                {/* Visual Accent */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-primary rounded-full blur-sm opacity-50" />
             </div>
          </div>

          {/* Right info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="space-y-1">
              <p className="text-muted text-xs font-black uppercase tracking-widest">Feels Like</p>
              <h3 className="text-2xl md:text-4xl font-black text-white">{Math.round(main.feels_like)}°</h3>
            </div>
            <div className="lg:hidden space-y-1">
              <p className="text-muted text-xs font-black uppercase tracking-widest">Condition</p>
              <h3 className="text-2xl font-bold text-white capitalize">{conditions[0].description}</h3>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl glass border-white/5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                 <div className="w-5 h-5 text-primary">
                    {weatherIcons[condition] || weatherIcons.Clouds}
                 </div>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted">Humidity</p>
                <p className="text-lg font-bold text-white">{main.humidity}%</p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-20 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Insights Below</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </motion.div>
    </div>
  );
}
