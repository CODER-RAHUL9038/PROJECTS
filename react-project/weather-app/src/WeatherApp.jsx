import WeatherCard from "./WeatherCard";
import SearchButton from "./SearchButton";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Credit from "./Credit.jsx";

const API_URL = import.meta.env.VITE_WEATHER_API_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city) return;
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen px-4 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl mx-auto"
      >
        <SearchButton
          city={city}
          setCity={setCity}
          getWeather={getWeather}
          error={error}
          loading={loading}
        />

        <div className="mt-8 md:mt-12">
          <AnimatePresence mode="wait">
            {weather ? (
              <motion.div
                key="weather-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <WeatherCard weather={weather} />
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="p-6 rounded-full bg-white/5 border border-white/10 mb-4">
                  <span className="text-4xl text-primary">🌍</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Explore the World's Weather</h2>
                <p className="text-muted max-w-xs mx-auto">
                  Enter a city name to get real-time weather forecasts worldwide.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="mt-auto pt-10">
        <Credit />
      </div>
    </div>
  );
}
