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
        pt: { xs: 4, md: 6 },
        pb: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 1.5 }}>
        <WbSunnyIcon sx={{ fontSize: 40, color: "#ffb74d" }} />
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            letterSpacing: "-0.02em",
            background: "linear-gradient(45deg, #fff, #90caf9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 10px 20px rgba(0,0,0,0.2)",
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
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          width: "100%",
          maxWidth: 600,
          px: 2,
        }}
      >
        <TextField
          placeholder="Search city..."
          variant="outlined"
          value={city}
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
                  <SearchIcon sx={{ color: "rgba(255,255,255,0.7)" }} />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            /* Glass input */
            "& .MuiOutlinedInput-root": {
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderRadius: "16px",
              color: "#fff",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",

              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.2)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.4)",
              },
              "&.Mui-focused": {
                background: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 0 20px rgba(144, 202, 249, 0.2)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#90caf9",
                borderWidth: "2px",
              },
            },
            "& .MuiFormHelperText-root": {
              color: "#ffab91",
              fontWeight: 500,
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={!city}
          sx={{
            height: { sm: 56 },
            px: 4,
            borderRadius: "16px",
            background: "linear-gradient(135deg, #90caf9, #42a5f5)",
            color: "#fff",
            fontSize: "1rem",
            boxShadow: "0 8px 32px rgba(66, 165, 245, 0.3)",
            textTransform: "none",
            fontWeight: 700,
            transition: "all 0.3s ease",

            "&:hover": {
              background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
              transform: "translateY(-2px)",
              boxShadow: "0 12px 40px rgba(66, 165, 245, 0.4)",
            },
            "&:active": {
              transform: "translateY(0)",
            },
            "&.Mui-disabled": {
              background: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.3)",
            },
          }}
        >
          Search
        </Button>
      </Box>

      <Collapse in={Boolean(error)}>
        <Typography
          sx={{
            mt: 2,
            color: "#ffab91",
            fontWeight: 600,
            background: "rgba(255, 87, 34, 0.1)",
            px: 2,
            py: 1,
            borderRadius: "8px",
            border: "1px solid rgba(255, 87, 34, 0.2)",
          }}
        >
          {error}
        </Typography>
      </Collapse>
    </Box>
  );
}
