import React, { useState, useEffect } from "react";
import './ticker.css'

const Ticker = () => {
  const [tickerText, setTickerText] = useState("Fetching location and time...");

  useEffect(() => {
    const updateTicker = () => {
      const now = new Date();
      const dateTimeString = now.toLocaleString();

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
              );
              const data = await response.json();
              const location = data.display_name || `Lat: ${latitude}, Lon: ${longitude}`;
              setTickerText(`📍 ${location} | 🕒 ${dateTimeString}`);
            } catch {
              setTickerText(`📍 Location not found | 🕒 ${dateTimeString}`);
            }
          },
          () => {
            setTickerText(`📍 Location permission denied | 🕒 ${dateTimeString}`);
          }
        );
      } else {
        setTickerText(`📍 Geolocation not supported | 🕒 ${dateTimeString}`);
      }
    };

    updateTicker();
    const interval = setInterval(updateTicker, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-[white] py-2 overflow-hidden" style={{zIndex:"99",backgroundColor:"#743a13",position:"fixed",bottom:"0"}}>
      <marquee className="whitespace-nowrap animate-marquee px-4">{tickerText}</marquee>
    </div>
  );
};

export default Ticker;
