import React from "react";
import { motion } from "framer-motion";
import { Sun, Cloud, CloudRain, Zap, Snowflake, CloudDrizzle } from "lucide-react";

const ForecastItem = ({ time, temp, icon: condition, type }) => {
  const weatherIcons = {
    Clear: <Sun className="w-8 h-8 text-yellow-400" />,
    Clouds: <Cloud className="w-8 h-8 text-blue-200" />,
    Rain: <CloudRain className="w-8 h-8 text-blue-500" />,
    Thunderstorm: <Zap className="w-8 h-8 text-yellow-300" />,
    Snow: <Snowflake className="w-8 h-8 text-white" />,
    Drizzle: <CloudDrizzle className="w-8 h-8 text-blue-300" />,
  };

  return (
    <motion.div
      whileHover={{ y: -5, background: "rgba(255,255,255,0.08)" }}
      className={`flex ${type === 'hourly' ? 'flex-col items-center min-w-[100px] p-6' : 'justify-between items-center p-4 w-full'} rounded-3xl glass border-white/5 transition-all duration-300`}
    >
      <span className="text-muted text-xs font-black uppercase tracking-widest mb-2">
        {time}
      </span>
      <div className="my-2 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
        {weatherIcons[condition] || weatherIcons.Clouds}
      </div>
      <span className="text-xl font-black text-white mt-1">
        {Math.round(temp)}°
      </span>
    </motion.div>
  );
};

export default function Forecast({ hourly, daily }) {
  return (
    <div className="space-y-12 px-4 py-8">
      {/* Hourly Forecast */}
      <section>
        <h3 className="text-muted text-[10px] font-black uppercase tracking-[0.3em] mb-6 px-2">
          Hourly Forecast <span className="text-primary/40">• Next 24 Hours</span>
        </h3>
        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide snap-x">
          {hourly?.map((item, i) => (
            <div key={i} className="snap-start">
              <ForecastItem
                time={new Date(item.dt * 1000).toLocaleTimeString([], { hour: 'numeric' })}
                temp={item.main.temp}
                icon={item.weather[0].main}
                type="hourly"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Forecast */}
      <section>
        <h3 className="text-muted text-[10px] font-black uppercase tracking-[0.3em] mb-6 px-2">
          7-Day Forecast <span className="text-secondary/40">• Upcoming Week</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {daily?.map((item, i) => (
            <ForecastItem
              key={i}
              time={new Date(item.dt * 1000).toLocaleDateString([], { weekday: 'short' })}
              temp={item.main.temp}
              icon={item.weather[0].main}
              type="weekly"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
