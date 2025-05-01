import { useEffect } from "react";

function useThrottle(func, delay) {
  let lastTime = 0;
  
  return (...args) => {
    const now = Date.now();
    if (now - lastTime >= delay) {
      func(...args);
      lastTime = now;
    }
  };
}

// Usage in React
useEffect(() => {
  const handleScroll = useThrottle(() => console.log("Scrolled!"), 1000);
  window.addEventListener("scroll", handleScroll);
  
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
