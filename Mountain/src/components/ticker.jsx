import React from 'react'

const ticker = () => {

  function updateTicker() {
    const ticker = document.getElementById("ticker");
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                .then(response => response.json())
                .then(data => {
                    const location = data.display_name || `Lat: ${latitude}, Lon: ${longitude}`;
                    ticker.innerHTML = `📍 ${location} | 🕒 ${dateTimeString}`;
                })
                .catch(() => {
                    ticker.innerHTML = `📍 Location not found | 🕒 ${dateTimeString}`;
                });
        }, () => {
            ticker.innerHTML = `📍 Location permission denied | 🕒 ${dateTimeString}`;
        });
    } else {
        ticker.innerHTML = `📍 Geolocation not supported | 🕒 ${dateTimeString}`;
    }
}

setInterval(updateTicker, 1000);
updateTicker();

  return (
    <div>
      
    </div>
  )
}

export default ticker

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Scrolling Ticker with Geolocation</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 0;
//             display: flex;
//             flex-direction: column;
//             justify-content: space-between;
//             height: 100vh;
//         }
        
//         .ticker-container {
//             position: fixed;
//             bottom: 0;
//             width: 100%;
//             background: #333;
//             color: #fff;
//             padding: 10px 0;
//             overflow: hidden;
//             white-space: nowrap;
//         }

//         .ticker-content {
//             display: inline-block;
//             padding-left: 100%;
//             animation: ticker-scroll 15s linear infinite;
//         }

//         @keyframes ticker-scroll {
//             from {
//                 transform: translateX(100%);
//             }
//             to {
//                 transform: translateX(-100%);
//             }
//         }
//     </style>
// </head>
// <body>

//     <div class="ticker-container">
//         <div class="ticker-content" id="ticker">Fetching location and time...</div>
//     </div>

//     <script>

//     </script>

// </body>
// </html>
