import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Collapse, Typography, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function SearchButton({ city, setCity, getWeather, error }) {
  const [touched, setTouched] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    document.activeElement.blur(); //  hides keyboard in phones
    getWeather();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: { xs: 2, md: 4 },
        pb: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
        <WbSunnyIcon sx={{ fontSize: { xs: 28, md: 36 }, color: "#ffb74d" }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            letterSpacing: "-0.03em",
            background: "linear-gradient(to right, #fff, #90caf9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
          }}
        >
          Weather Sky
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 1.5,
          width: "100%",
          maxWidth: 500,
          px: 2,
        }}
      >
        <TextField
          placeholder="Enter city..."
          variant="outlined"
          value={city}
          size="small"
          fullWidth
          onChange={(e) => setCity(e.target.value)}
          onBlur={() => setTouched(true)}
          error={touched && !city}
          slotProps={{
            input: {
              inputMode: "search",
              enterKeyHint: "search",
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "rgba(255,255,255,0.6)", fontSize: 20 }} />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(25px)",
              WebkitBackdropFilter: "blur(25px)",
              borderRadius: "14px",
              color: "#fff",
              height: 48,
              transition: "all 0.3s ease",
              "& fieldset": { borderColor: "rgba(255, 255, 255, 0.15)" },
              "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.3)" },
              "&.Mui-focused fieldset": { borderColor: "#90caf9", borderWidth: "2px" },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={!city}
          sx={{
            height: 48,
            px: 3,
            borderRadius: "14px",
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            color: "#fff",
            textTransform: "none",
            fontWeight: 800,
            boxShadow: "0 4px 20px rgba(0, 242, 254, 0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
              boxShadow: "0 6px 25px rgba(0, 242, 254, 0.5)",
              transform: "translateY(-1px)",
            },
          }}
        >
          Search
        </Button>
      </Box>

      <Collapse in={Boolean(error)}>
        <Typography
          variant="caption"
          sx={{
            mt: 1,
            color: "#ffab91",
            fontWeight: 600,
            background: "rgba(255, 87, 34, 0.1)",
            px: 1.5,
            py: 0.5,
            borderRadius: "6px",
          }}
        >
          {error}
        </Typography>
      </Collapse>
    </Box>
  );
}
