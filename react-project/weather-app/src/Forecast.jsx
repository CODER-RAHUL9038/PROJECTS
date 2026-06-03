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
      whileHover={{ y: -5, background: "rgba(255,255,255,0.12)" }}
      className={`flex ${type === 'hourly' ? 'flex-col items-center min-w-[110px] p-6' : 'justify-between items-center p-5 w-full'} rounded-[24px] glass border-white/10 transition-all duration-300 shadow-xl`}
    >
      <span className="text-muted text-[10px] font-black uppercase tracking-[0.2em] mb-3 opacity-60">
        {time}
      </span>
      <div className="my-3 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
        {weatherIcons[condition] || weatherIcons.Clouds}
      </div>
      <span className="text-2xl font-black text-white mt-1 tracking-tighter">
        {Math.round(temp)}°
      </span>
    </motion.div>
  );
};

export default function Forecast({ hourly, daily }) {
  return (
    <div className="space-y-16 px-4 py-12 max-w-[1100px] mx-auto w-full">
      {/* Hourly Forecast */}
      <section>
        <div className="flex items-center justify-between mb-8 px-2">
          <h3 className="text-muted text-[10px] font-black uppercase tracking-[0.4em]">
            Hourly Forecast <span className="text-primary/40 mx-2">•</span> <span className="text-white/40">Next 24 Hours</span>
          </h3>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-8 scrollbar-hide snap-x px-2">
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
        <div className="flex items-center justify-between mb-8 px-2">
          <h3 className="text-muted text-[10px] font-black uppercase tracking-[0.4em]">
            7-Day Forecast <span className="text-secondary/40 mx-2">•</span> <span className="text-white/40">Upcoming Week</span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2">
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
