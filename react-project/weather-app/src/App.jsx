import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background selection:bg-primary/30">
      {/* Premium Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-accent/15 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      
      {/* Content */}
      <div className="relative z-10">
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;
