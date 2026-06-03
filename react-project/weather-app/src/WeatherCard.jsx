import { motion } from "framer-motion";
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Eye, 
  Compass, 
  CloudRain, 
  Sun, 
  Cloud, 
  Zap, 
  Snowflake, 
  MapPin,
  Calendar
} from "lucide-react";

const MetricCard = ({ icon: Icon, label, value, unit, color }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.02 }}
    className="p-5 rounded-3xl glass-card flex flex-col items-start gap-4 transition-all duration-300"
  >
    <div className={`p-3 rounded-2xl bg-${color}/10`}>
      <Icon className={`w-6 h-6 text-${color}`} />
    </div>
    <div>
      <p className="text-muted text-xs font-semibold uppercase tracking-wider mb-1">{label}</p>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className="text-muted text-sm font-medium">{unit}</span>
      </div>
    </div>
  </motion.div>
);

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    name,
    sys: { country },
    main: { temp, feels_like, humidity, pressure },
    wind: { speed },
    visibility,
    weather: [condition]
  } = weather;

  const weatherIcons = {
    Clear: <Sun className="w-24 h-24 text-yellow-400" />,
    Clouds: <Cloud className="w-24 h-24 text-blue-300" />,
    Rain: <CloudRain className="w-24 h-24 text-blue-500" />,
    Thunderstorm: <Zap className="w-24 h-24 text-yellow-300" />,
    Snow: <Snowflake className="w-24 h-24 text-blue-100" />,
    Drizzle: <CloudRain className="w-24 h-24 text-blue-400" />,
  };

  const currentIcon = weatherIcons[condition.main] || <Cloud className="w-24 h-24 text-white" />;

  return (
    <div className="space-y-6">
      {/* Main Feature Card */}
      <div className="glass-card rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
           {currentIcon}
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
          {/* Left Side: Temperature and Location */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs">
                <MapPin className="w-4 h-4" />
                <span>Current Location</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                {name}, <span className="text-primary/70">{country}</span>
              </h2>
              <p className="text-muted flex items-center gap-2 font-medium">
                <Calendar className="w-4 h-4" />
                {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-8xl md:text-[10rem] font-black tracking-tighter text-white bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
                {Math.round(temp)}°
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-white capitalize">{condition.description}</p>
                <p className="text-muted font-medium">Feels like <span className="text-white">{Math.round(feels_like)}°</span></p>
              </div>
            </div>
          </div>

          {/* Right Side: Animated Icon Container */}
          <div className="hidden md:flex items-center justify-center p-8">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150" />
              <div className="relative z-10 filter drop-shadow-[0_20px_50px_rgba(79,140,255,0.4)]">
                {currentIcon}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <MetricCard 
          icon={Thermometer} 
          label="Temperature" 
          value={Math.round(temp)} 
          unit="°C"
          color="primary" 
        />
        <MetricCard 
          icon={Droplets} 
          label="Humidity" 
          value={humidity} 
          unit="%"
          color="accent" 
        />
        <MetricCard 
          icon={Wind} 
          label="Wind Speed" 
          value={Math.round(speed * 3.6)} 
          unit="km/h"
          color="secondary" 
        />
        <MetricCard 
          icon={Eye} 
          label="Visibility" 
          value={(visibility / 1000).toFixed(1)} 
          unit="km"
          color="white" 
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-[2rem] glass-card flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/5 text-primary">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-muted font-semibold uppercase tracking-widest text-xs">Pressure</span>
           </div>
           <span className="text-xl font-bold text-white">{pressure} <span className="text-muted text-sm">hPa</span></span>
        </div>
        <div className="p-6 rounded-[2rem] glass-card flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-white/5 text-secondary">
                <Wind className="w-6 h-6" />
              </div>
              <span className="text-muted font-semibold uppercase tracking-widest text-xs">Wind Direction</span>
           </div>
           <span className="text-xl font-bold text-white">{weather.wind.deg}°</span>
        </div>
      </div>
    </div>
  );
}
