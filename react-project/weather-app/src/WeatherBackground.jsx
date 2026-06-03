import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function WeatherBackground({ condition }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Dynamic colors based on weather
  const getThemeColors = () => {
    switch (condition) {
      case 'Clear': return { primary: 'bg-yellow-500/20', secondary: 'bg-orange-500/10' };
      case 'Rain': return { primary: 'bg-blue-600/20', secondary: 'bg-cyan-500/10' };
      case 'Snow': return { primary: 'bg-blue-100/20', secondary: 'bg-white/10' };
      case 'Thunderstorm': return { primary: 'bg-purple-600/20', secondary: 'bg-blue-500/10' };
      case 'Clouds': return { primary: 'bg-slate-400/20', secondary: 'bg-blue-300/10' };
      default: return { primary: 'bg-primary/20', secondary: 'bg-secondary/10' };
    }
  };

  const colors = getThemeColors();

  return (
    <div className="fixed inset-0 w-full h-full bg-[#050816] overflow-hidden -z-10">
      {/* Dynamic Blobs */}
      <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] ${colors.primary} rounded-full blur-[150px] animate-blob opacity-60`} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] ${colors.secondary} rounded-full blur-[150px] animate-blob animation-delay-2000 opacity-60`} />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random()
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [0.1, 0.5, 0.1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>

      {/* Mouse Responsive Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Atmospheric Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  );
}
