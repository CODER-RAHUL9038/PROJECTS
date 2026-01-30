import "./App.css";
import WeatherCard from "./WeatherCard";
import SearchButton from "./SearchButton";
import { useState } from "react";
import Box from "@mui/material/Box";
import WeatherPlaceholder from "./WeatherPlaceholder";
const API_URL = import.meta.env.VITE_WEATHER_API_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
import { Fade } from "@mui/material";
import Credit from "./Credit.jsx";

export default function WeatherApp() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let getWeather = async () => {
    if (!city) return;
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",

        flexDirection: "column",
      }}
    >
      <SearchButton
        city={city}
        setCity={setCity}
        getWeather={getWeather}
        error={error}
      ></SearchButton>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Fade in={!Boolean(weather)} timeout={300}>
          <Box sx={{ position: "absolute", width: "100%" }}>
            <WeatherPlaceholder />
            <Credit></Credit>
          </Box>
        </Fade>

        <Fade in={Boolean(weather)} timeout={300}>
          <Box>
            <WeatherCard city={city} weather={weather} />
            <Credit></Credit>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
