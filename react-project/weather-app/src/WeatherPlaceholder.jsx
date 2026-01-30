import Card from "@mui/material/Card";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CardMedia from "@mui/material/CardMedia";

export default function WeatherPlaceholder() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: {
            xs: 420, // mobile
            sm: 700, // 📲 tablet bigger
            md: 550, // desktop back to normal (optional)
            xl:800
          },

          minHeight: {
            xs: 400, // mobile
            sm: 750, // 📲 tablet taller
            md: 350,
          },

          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        }}
      >
        {/* Image placeholder */}
        {/* <Skeleton variant="rectangular" height={190} /> */}
        <CardMedia
          component="video"
          src="/earth2.mp4"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            minHeight: { xs: 350, sm: 700, md: 310,xl:450  },
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",

            animation: "softFade 4s infinite",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "space-between",
          }}
        >
          <Typography
            align="center"
            sx={{
              mt: 1,
              fontSize: "1.25rem",
            }}
          >
            Check the weather anywhere 🌍
          </Typography>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              p: 1,

              opacity: 0.8,
              fontSize: "0.9rem",
            }}
          >
            Start by searching a city above
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
