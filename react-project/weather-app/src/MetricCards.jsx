import React from "react";
import { motion } from "framer-motion";
import { Thermometer, Droplets, Wind, Eye, Compass, Sun, Wind as WindIcon } from "lucide-react";

const MetricCard = ({ icon: Icon, label, value, unit, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="p-6 rounded-[2.5rem] glass-card group transition-all duration-500 overflow-hidden relative"
  >
    <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-${color} to-transparent opacity-50`} />
    <div className="flex flex-col gap-6 relative z-10">
      <div className={`p-4 rounded-2xl bg-white/5 border border-white/5 w-fit group-hover:scale-110 transition-transform duration-500`}>
        <Icon className={`w-6 h-6 text-${color}`} />
      </div>
      <div>
        <p className="text-muted text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-60">
          {label}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black text-white group-hover:text-primary transition-colors">{value}</span>
          <span className="text-muted text-sm font-bold uppercase tracking-tighter">{unit}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function MetricCards({ weather }) {
  if (!weather) return null;

  const { main, wind, visibility } = weather;

  const metrics = [
    { icon: Thermometer, label: "Pressure", value: main.pressure, unit: "hPa", color: "blue-400" },
    { icon: Droplets, label: "Humidity", value: main.humidity, unit: "%", color: "cyan-400" },
    { icon: Wind, label: "Wind Speed", value: Math.round(wind.speed * 3.6), unit: "km/h", color: "purple-400" },
    { icon: Compass, label: "Wind Degree", value: wind.deg, unit: "°", color: "blue-500" },
    { icon: Eye, label: "Visibility", value: (visibility / 1000).toFixed(1), unit: "km", color: "white" },
    { icon: Sun, label: "UV Index", value: "4.2", unit: "Low", color: "yellow-400" }, // Mocked UV for premium feel
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 px-4">
      {metrics.map((m, i) => (
        <MetricCard key={i} {...m} index={i} />
      ))}
    </div>
  );
}
