/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F8CFF",
        secondary: "#7C5CFF",
        accent: "#00E0FF",
        background: "#0B1020",
        muted: "#A0AEC0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #0B1020 0%, #1A1F35 100%)',
      },
    },
  },
  plugins: [],
}
