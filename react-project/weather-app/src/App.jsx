import "./App.css";
import WeatherApp from "./WeatherApp";


function App() {
  return (
    <>
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/earth2.mp4" type="video/mp4" />
      </video>
      <WeatherApp></WeatherApp>
    </>
  );
}

export default App;
