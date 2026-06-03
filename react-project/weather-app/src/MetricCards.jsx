import React from "react";
import { motion } from "framer-motion";
import { 
  Droplets, 
  Wind, 
  Eye, 
  Sun, 
  ArrowUpRight, 
  Gauge,
  Wind as WindIcon
} from "lucide-react";

const MetricCard = ({ icon: Icon, label, value, unit, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="p-6 rounded-[28px] bg-white/[0.04] backdrop-blur-[30px] border border-white/[0.1] shadow-2xl group transition-all duration-500 overflow-hidden relative"
  >
    {/* Reflection Highlight */}
    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
    
    <div className="flex flex-col gap-8 relative z-10">
      <div className="flex justify-between items-start">
        <div className={`p-3.5 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
          <Icon className={`w-6 h-6 text-${color}`} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500">
           <ArrowUpRight className="w-5 h-5 text-white/30" />
        </div>
      </div>
      <div>
        <p className="text-muted text-[10px] font-black uppercase tracking-[0.25em] mb-2 opacity-50">
          {label}
        </p>
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl md:text-4xl font-black text-white group-hover:text-primary transition-colors tracking-tighter">
            {value}
          </span>
          <span className="text-muted text-xs font-black uppercase tracking-widest">{unit}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function MetricCards({ weather }) {
  if (!weather) return null;

  const { main, wind, visibility, sys } = weather;

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const metrics = [
    { icon: Gauge, label: "Pressure", value: main.pressure, unit: "hPa", color: "blue-400" },
    { icon: Droplets, label: "Humidity", value: main.humidity, unit: "%", color: "cyan-400" },
    { icon: Wind, label: "Wind", value: Math.round(wind.speed * 3.6), unit: "km/h", color: "purple-400" },
    { icon: Sun, label: "Sunrise", value: formatTime(sys.sunrise), unit: "AM", color: "yellow-400" },
    { icon: Eye, label: "Visibility", value: (visibility / 1000).toFixed(1), unit: "km", color: "white" },
    { icon: Sun, label: "UV Index", value: "4.2", unit: "Low", color: "orange-400" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 px-4 max-w-[1100px] mx-auto w-full mb-12">
      {metrics.map((m, i) => (
        <MetricCard key={i} {...m} index={i} />
      ))}
    </div>
  );
}
