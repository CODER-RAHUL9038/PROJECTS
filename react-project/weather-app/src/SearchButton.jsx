import { Search, Loader2 } from "lucide-react";

export default function SearchButton({ city, setCity, getWeather, error, loading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <div className="p-4 rounded-3xl glass mb-6 relative">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
          <span className="text-5xl md:text-6xl relative z-10">☀️</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2 bg-gradient-to-r from-white via-white to-primary/50 bg-clip-text text-transparent">
          Weather Sky
        </h1>
        <p className="text-muted font-medium text-lg tracking-wide uppercase text-sm">
          Real-time weather forecasts worldwide
        </p>
      </div>

      {/* Search Bar Container */}
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-xl group relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
        
        <div className="relative flex items-center p-2 rounded-3xl glass shadow-2xl transition-all duration-300 border-white/10 group-focus-within:border-white/20">
          <div className="flex items-center flex-1 px-4">
            <Search className="w-5 h-5 text-muted group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search for a city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-white px-4 py-3 text-lg placeholder:text-muted/50"
            />
          </div>
          
          <button
            type="submit"
            disabled={!city || loading}
            className="flex items-center justify-center h-14 px-8 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:scale-100"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              "Search"
            )}
          </button>
        </div>

        {error && (
          <div className="absolute top-full left-0 right-0 mt-4 px-6 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 backdrop-blur-md">
            <p className="text-red-400 text-sm font-semibold text-center">{error}</p>
          </div>
        )}
      </form>
    </div>
  );
}
