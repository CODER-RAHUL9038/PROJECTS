import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const description = weather.weather[0].description;
  const icon = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  const weatherImages = {
    Clear:
      "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=600&auto=format&fit=crop&q=60",

    Clouds:
      "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=600&q=55&auto=format&fit=crop",

    Rain: "https://images.unsplash.com/photo-1576514864427-f0809d2b66eb?w=600&q=55&auto=format&fit=crop",

    Snow: "https://images.unsplash.com/photo-1482784160316-6eb046863ece?w=600&q=55&auto=format&fit=crop",

    Thunderstorm:
      "https://images.unsplash.com/photo-1500674425229-f692875b0ab7?w=600&q=50&auto=format&fit=crop",

    Drizzle:
      "https://media.istockphoto.com/id/516351793/photo/majestic-storm-clouds.jpg?s=612x612&w=0&k=20&c=jJmcqJVMhjJjntlibEE287ZYE9dG9Jl-DraUk9VcCWI=",

    Mist: "https://images.unsplash.com/photo-1482841628122-9080d44bb807?w=600&q=55&auto=format&fit=crop",

    Haze: "https://media.istockphoto.com/id/2186506425/photo/foggy-weather-lanterns-by-the-road-night-city.jpg?s=612x612&w=0&k=20&c=33_DBcM5kxShmf5ExiKJprgT_ENyXFT5qQlDk_VJe2Q=",
    Smoke:
      "https://images.unsplash.com/photo-1565115399809-04a714aaa956?w=600&q=60&auto=format&fit=crop",

    Dust: "https://images.unsplash.com/photo-1603695820889-f8a0a86b8712?w=600&q=60&auto=format&fit=crop",

    Sand: "https://images.unsplash.com/photo-1511514323702-88e7e52f5223?w=600&q=60&auto=format&fit=crop",

    Ash: "https://images.unsplash.com/photo-1684636553231-7612951229d2?w=600&q=60&auto=format&fit=crop",

    Tornado:
      "https://images.unsplash.com/photo-1527482937786-6608f6e14c15?w=600&q=60&auto=format&fit=crop",

    Squall:
      "https://images.unsplash.com/photo-1549356384-62459eaf492f?w=600&q=60&auto=format&fit=crop",
  };

  const condition = weather.weather[0].main;
  const imageUrl =
    weatherImages[condition] ||
    "https://images.unsplash.com/photo-1536424868245-13b715e11e71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHJhaW58ZW58MHwwfDB8fHww";

  return (
    <Box
      sx={{
        maxHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Card
        sx={{
          
          minWidth: {
            xs: 330, // mobile
            sm: 700, // 📲 tablet bigger
            md: 500, // desktop back to normal (optional)
            xl:800
          },

           minHeight: {
              xs: 350, // mobile
              sm: 800, // 📲 tablet taller
              md: 100,
            },

          /* 🔮 Glass effect */
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",

          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.3)",

          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            maxHeight: {
              xs: 210, // mobile
              sm: 480, // 📲 tablet taller
              md: 160,
              xl:300
            },
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            filter: "blur(4px)",
            transition: "filter 0.3s ease",
            "&.loaded": {
              filter: "blur(0)",
            },
          }}
          onLoad={(e) => e.target.classList.add("loaded")}
          loading="lazy"
          src={imageUrl}
        />

        <CardContent
          sx={{
            p: {
              xs: 2, // 📱 mobile (16px)
              sm: 1, // 💻 desktop (8px)
            },
            "&:last-child": {
              pb: {
                xs: 2,
                sm: 1,
              },
            },
          }}
        >
          <Typography variant="h5" gutterBottom>
            {weather.name}
          </Typography>

          {/* Temperature */}
          <Typography variant="h3">
            {Math.round(weather.main.temp)}°C
          </Typography>

          {/* Icon + description */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <img src={iconUrl} alt="weather icon" width={48} />
            <Typography variant="body1">{description}</Typography>
          </Box>

          {/* Details */}
          <Box sx={{ mt: 1 }}>
            <Typography variant="body2" color="text.secondary">
              Feels like: {weather.main.feels_like}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Max: {weather.main.temp_max}°C | Min: {weather.main.temp_min}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Humidity: {weather.main.humidity}%
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
