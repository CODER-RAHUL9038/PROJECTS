import React from "react";
import { motion } from "framer-motion";
import { 
  Droplets, 
  Wind, 
  Eye, 
  Compass, 
  Sun, 
  ArrowUpRight, 
  ArrowDownRight,
  Gauge
} from "lucide-react";

const MetricCard = ({ icon: Icon, label, value, unit, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="p-6 rounded-[24px] bg-white/[0.04] backdrop-blur-[25px] border border-white/[0.08] group transition-all duration-500 overflow-hidden relative"
  >
    <div className="flex flex-col gap-6 relative z-10">
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
          <Icon className={`w-5 h-5 text-${color}`} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
           <ArrowUpRight className="w-4 h-4 text-white/40" />
        </div>
      </div>
      <div>
        <p className="text-muted text-[10px] font-black uppercase tracking-[0.2em] mb-1.5 opacity-50">
          {label}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl md:text-3xl font-black text-white group-hover:text-primary transition-colors">{value}</span>
          <span className="text-muted text-xs font-bold uppercase tracking-tighter">{unit}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function MetricCards({ weather }) {
  if (!weather) return null;

  const { main, wind, visibility, sys } = weather;

  // Function to format sunrise/sunset
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
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 px-4 max-w-[1100px] mx-auto w-full">
      {metrics.map((m, i) => (
        <MetricCard key={i} {...m} index={i} />
      ))}
    </div>
  );
}
