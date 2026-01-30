import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Collapse, Typography } from "@mui/material";

export default function SearchButton({ city, setCity, getWeather, error }) {
  const [touched, setTouched] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    document.activeElement.blur(); // 📱 hides keyboard
    getWeather();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Weather
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <TextField
          label="Search city"
          variant="outlined"
          value={city}
          size="small"
          onChange={(e) => setCity(e.target.value)}
          onBlur={() => setTouched(true)}
          error={touched && !city}
          helperText={touched && !city ? "City is required" : ""}
          slotProps={{
            input: {
              inputMode: "search",
              enterKeyHint: "search",
            },
          }}
          sx={{
            maxWidth: 400,
            minWidth: {
              xs: 200, // mobile
              sm: 350, // 📲 tablet taller
              md: 250,
            },

            /* Glass input */
            "& .MuiOutlinedInput-root": {
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: "12px",
              color: "#000000",

              "& fieldset": {
                borderColor: "rgba(18, 56, 83, 0.4)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(255,255,255,0.7)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#90caf9",
              },
            },

            "& .MuiInputLabel-root": {
              color: "rgba(78, 73, 73, 0.75)",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#424040",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            ml: 1,
            px: 3,
            borderRadius: "12px",
            background: "linear-gradient(135deg, #60a5fa, #38bdf8)",
            color: "#093264",

            boxShadow: "0 8px 24px rgba(56,189,248,0.4)",
            textTransform: "none",
            fontWeight: 600,

            "&:hover": {
              background: "linear-gradient(135deg, #3b82f6, #0ea5e9)",
              boxShadow: "0 10px 30px rgba(56,189,248,0.55)",
            },
          }}
        >
          Search
        </Button>
      </Box>

      <Collapse in={Boolean(error)}>
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      </Collapse>
    </Box>
  );
}
