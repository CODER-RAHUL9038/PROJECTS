import { Box, Typography } from "@mui/material";

export default function Credit() {
  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontSize: "1rem",
          opacity: 0.7,

          letterSpacing: "0.15em",
          fontWeight: 500,
        }}
      >
        Developed by
        <Box
          component="a"
          href="https://github.com/CODER-RAHUL9038"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "inherit",
            textDecoration: "none",
            fontWeight: 500,
            ml: 1,
            "&:hover": { textDecoration: "underline", color: "blue" },
          }}
        >
          Rahul Shaw
        </Box>
      </Typography>
    </Box>
  );
}
