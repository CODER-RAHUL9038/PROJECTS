import { Box, Typography } from "@mui/material";

export default function Credit() {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 2,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.9rem",
          color: "rgba(255, 255, 255, 0.8)",
          letterSpacing: "0.1em",
          fontWeight: 400,
          textTransform: "uppercase",
        }}
      >
        Developed by{" "}
        <Box
          component="a"
          href="https://github.com/CODER-RAHUL9038"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600,
            transition: "all 0.3s ease",
            borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
            "&:hover": {
              color: "#646cff",
              borderBottomColor: "#646cff",
              textShadow: "0 0 8px rgba(100, 108, 255, 0.5)",
            },
          }}
        >
          Rahul Shaw
        </Box>
      </Typography>
    </Box>
  );
}
