import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const description = weather.weather[0].description;
  const icon = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  const weatherImages = {
    Clear: "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=800&q=80",
    Clouds: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800&q=80",
    Rain: "https://images.unsplash.com/photo-1576514864427-f0809d2b66eb?w=800&q=80",
    Snow: "https://images.unsplash.com/photo-1482784160316-6eb046863ece?w=800&q=80",
    Thunderstorm: "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?w=800&q=80",
    Drizzle: "https://images.unsplash.com/photo-1541339907198-e087563f3f3b?w=800&q=80",
    Mist: "https://images.unsplash.com/photo-1482841628122-9080d44bb807?w=800&q=80",
    Haze: "https://images.unsplash.com/photo-1532592999526-7d49ee8d27d4?w=800&q=80",
  };

  const condition = weather.weather[0].main;
  const imageUrl = weatherImages[condition] || "https://images.unsplash.com/photo-1534088568595-a066f710b81f?w=800&q=80";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        mt: { xs: 2, md: 4 },
        px: 2,
        maxHeight: "calc(100vh - 200px)",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 450,
          background: "rgba(255, 255, 255, 0.07)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          borderRadius: "32px",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          overflow: "hidden",
          position: "relative",
          transition: "transform 0.4s ease",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 180,
            objectFit: "cover",
            filter: "brightness(0.8)",
          }}
          image={imageUrl}
          alt={condition}
        />

        <CardContent sx={{ p: 3, pt: 2, color: "#fff" }}>
          {/* Main Info */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
                {weather.name}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, textTransform: "capitalize", fontWeight: 500 }}>
                {description}
              </Typography>
            </Box>
            <Box component="img" src={iconUrl} sx={{ width: 80, height: 80, mt: -2, filter: "drop-shadow(0 0 15px rgba(255,255,255,0.4))" }} />
          </Box>

          <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, textAlign: "left", letterSpacing: "-2px" }}>
            {Math.round(weather.main.temp)}°
          </Typography>

          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 3 }} />

          {/* Grid Details */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <ThermostatIcon sx={{ fontSize: 24, mb: 0.5, opacity: 0.7 }} />
              <Typography variant="caption" display="block" sx={{ opacity: 0.6 }}>Feels Like</Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>{Math.round(weather.main.feels_like)}°</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <WaterDropIcon sx={{ fontSize: 24, mb: 0.5, opacity: 0.7 }} />
              <Typography variant="caption" display="block" sx={{ opacity: 0.6 }}>Humidity</Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>{weather.main.humidity}%</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <AirIcon sx={{ fontSize: 24, mb: 0.5, opacity: 0.7 }} />
              <Typography variant="caption" display="block" sx={{ opacity: 0.6 }}>Wind</Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>{Math.round(weather.wind.speed)} km/h</Typography>
            </Box>
          </Box>
          
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between", opacity: 0.6 }}>
             <Typography variant="caption">H: {Math.round(weather.main.temp_max)}°</Typography>
             <Typography variant="caption">L: {Math.round(weather.main.temp_min)}°</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
