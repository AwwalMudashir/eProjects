import React from "react";
import "./components.css";

const images = [
  "https://img.freepik.com/free-photo/man-standing-cliff-with-fog-overlay-texture_53876-126854.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/portrait-smiling-man-sitting-top-rock-enjoying-with-his-friend_23-2148139710.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid", 
  "https://img.freepik.com/free-photo/silhouette-person-standing-top-hill-beautiful-colorful-sky-morning_181624-24501.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/stunning-shot-young-man-climbing-up-cliff-cold-foggy-day_181624-18833.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid",
];

const images2 = [
  "https://img.freepik.com/free-photo/two-male-hiker-sitting-top-rock-mountain-looking-scenic-view_23-2148182804.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid", 
  "https://img.freepik.com/free-photo/abseiling_181624-362.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/woman-walking-snow-with-rackets_268835-1872.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/horizontal-shot-group-people-hiking-mountains-covered-snow-cloudy-sky_181624-44954.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"

]

const GalleryImages = () => {
  return (
    <div className="gallery-container scroll-element">
      {/* First Row */}
      <div className="gallery-row">
        <img
          className="main-img"
          src="https://img.freepik.com/free-photo/lonely-hiker_181624-361.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
          alt="Main Image"
        />
        <div className="grid-container">
          {images.map((src, index) => (
            <img
            key={index} className="grid-img scroll-element" src={src} alt={`Gallery ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Second Row (Flipped Layout) */}
      <div className="gallery-row reverse">
      <img
          className="main-img"
          src="https://img.freepik.com/free-photo/full-shot-adventurous-man-bivouacking_23-2150562957.jpg?uid=R142318825&ga=GA1.1.482138650.1720018437&semt=ais_hybrid"
          alt="Main Image 2"
        />
        <div className="grid-container">
          {images2.map((src, index) => (
            <img key={index} className="grid-img" src={src} alt={`Gallery ${index + 5}`} />
          ))}
        </div>
 
      </div>
    </div>
  );
};

export default GalleryImages;
