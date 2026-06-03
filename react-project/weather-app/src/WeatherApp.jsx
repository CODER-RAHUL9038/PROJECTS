import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, MapPin, Loader2, Info } from "lucide-react";

// New Components
import WeatherBackground from "./WeatherBackground";
import SearchPalette from "./SearchPalette";
import HeroSection from "./HeroSection";
import MetricCards from "./MetricCards";
import Forecast from "./Forecast";
import Credit from "./Credit.jsx";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const CURRENT_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem("recent_searches");
    return saved ? JSON.parse(saved) : ["London", "Paris", "New York"];
  });

  const fetchWeatherData = async (searchCity) => {
    if (!searchCity) return;
    setLoading(true);
    setError("");

    try {
      // Fetch Current Weather
      const currentRes = await fetch(`${CURRENT_URL}?q=${searchCity}&appid=${API_KEY}&units=metric`);
      if (!currentRes.ok) throw new Error("City not found");
      const currentData = await currentRes.json();
      
      // Fetch Forecast
      const forecastRes = await fetch(`${FORECAST_URL}?q=${searchCity}&appid=${API_KEY}&units=metric`);
      const forecastData = await forecastRes.json();

      setWeather(currentData);
      setForecast(processForecast(forecastData.list));
      
      // Update Recent Searches
      const updatedSearches = [searchCity, ...recentSearches.filter(s => s !== searchCity)].slice(0, 4);
      setRecentSearches(updatedSearches);
      localStorage.setItem("recent_searches", JSON.stringify(updatedSearches));

    } catch (err) {
      setError(err.message);
      // Keep previous weather if search fails
    } finally {
      setLoading(false);
    }
  };

  const processForecast = (list) => {
    // Hourly: first 8 points (24h)
    const hourly = list.slice(0, 8);
    // Daily: 1 point per day (approx 12:00)
    const daily = list.filter((_, i) => i % 8 === 0);
    return { hourly, daily };
  };

  // Initial load
  useEffect(() => {
    fetchWeatherData("Pune");
  }, []);

  return (
    <div className="min-h-screen text-white font-inter selection:bg-primary/30">
      <WeatherBackground condition={weather?.weather[0].main} />
      
      {/* Floating Search Trigger */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsSearchOpen(true)}
        className="fixed top-6 right-6 p-4 rounded-2xl glass border-white/10 shadow-2xl z-[50] group hover:scale-110 active:scale-95 transition-all"
      >
        <div className="flex items-center gap-3">
          <Search className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
          <div className="hidden md:flex items-center gap-1.5 px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-black text-muted/60 tracking-tighter">
            <Command className="w-3 h-3" />
            <span>K</span>
          </div>
        </div>
      </motion.button>

      {/* Global Message Area */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[60] px-6 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 backdrop-blur-xl flex items-center gap-3"
          >
            <Info className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-bold text-sm tracking-tight">{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto pt-6 pb-20 space-y-6">
        <AnimatePresence mode="wait">
          {loading && !weather ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center min-h-[80vh] space-y-6"
            >
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
              <p className="text-muted font-black uppercase tracking-[0.3em] text-xs px-12 text-center">Architecting Atmospheric Reality...</p>
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4 md:space-y-8"
            >
              <HeroSection weather={weather} />
              
              <div className="space-y-12 md:space-y-20">
                <MetricCards weather={weather} />
                <Forecast hourly={forecast?.hourly} daily={forecast?.daily} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <SearchPalette
        isOpen={isSearchOpen}
        setIsOpen={setIsSearchOpen}
        city={city}
        setCity={setCity}
        getWeather={fetchWeatherData}
        loading={loading}
        recentSearches={recentSearches}
      />

      <Credit />
    </div>
  );
}
