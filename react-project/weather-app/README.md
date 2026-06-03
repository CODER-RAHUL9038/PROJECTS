# ☁️ Weather Sky - Advanced Premium Experience

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind--CSS-4.3.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer--Motion-12.4.0-ff0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

A world-class, futuristic weather dashboard featuring atmospheric backgrounds, a command-palette search experience, and high-fidelity animations. Designed for a 2026 premium aesthetic.

🔗 **[Live Demo](https://weatherapp-gules-sigma-87.vercel.app/)**

---

## ✨ Features

- ⌨️ **Command Palette Search:** Quick search triggered by `/` or a floating icon, inspired by Raycast and Arc Browser.
- 🌌 **Atmospheric Background:** Mouse-responsive radial lighting and dynamic weather-aware animations (blobs, particles).
- 💎 **Ultra-Glassmorphism:** Deep frosted blurs and multi-layered border effects for a premium product feel.
- 📊 **Advanced Forecasts:** Real-time current weather integrated with 5-day / 3-hour forecast data (Hourly & Weekly).
- 🌡️ **Metric Dashboard:** Sophisticated grid for Pressure, Humidity, Wind, Visibility, and UV Index.
- 🎭 **Micro-interactions:** Staggered reveals, floating icons, and smooth state transitions powered by Framer Motion.

---

## 🛠️ Tech Stack

- **Frontend:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API:** [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📂 Architecture

```text
weather-app/
├── src/
│   ├── WeatherApp.jsx        # Orchestration & State Hub
│   ├── WeatherBackground.jsx # Mouse-responsive atmospheric bg
│   ├── SearchPalette.jsx    # Command-palette search experience
│   ├── HeroSection.jsx      # High-impact temperature & location
│   ├── MetricCards.jsx      # Environmental statistics dashboard
│   ├── Forecast.jsx         # Hourly & Weekly data visualization
│   ├── Credit.jsx           # Premium footer component
│   └── index.css            # Tailwind directives & custom utilities
└── ...
```

---

## 🚀 Getting Started

1. **Clone & Install**
   ```bash
   git clone https://github.com/CODER-RAHUL9038/weather-app.git
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file:
   ```env
   VITE_WEATHER_API_KEY=your_key
   ```

3. **Launch**
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Author

**Rahul Shaw**
- GitHub: [@CODER-RAHUL9038](https://github.com/CODER-RAHUL9038)
- LinkedIn: [Rahul Shaw](https://www.linkedin.com/in/rahul-shaw-00/)

---

<p align="center">
  Crafted with precision for a premium experience.
</p>
