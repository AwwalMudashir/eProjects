import React from "react";
import "./Stories.css";

const successStories = [
  {
    name: "Arunima Sinha",
    title: "First Female Amputee to Climb Everest",
    description:
      "After losing her leg in an accident, Arunima Sinha trained rigorously and conquered Everest in 2013, proving that determination knows no limits.",
    quote: "Your ability is stronger than your disability.",
    image: "/arunima.jpg",
  },
  {
    name: "Grace Hoeman",
    title: "Led the First All-Female Denali Expedition",
    description:
      "In 1970, Grace Hoeman led a pioneering all-women team to summit Denali, challenging gender stereotypes in mountaineering.",
    quote: "Breaking barriers, one summit at a time.",
    image: "/hoeman.jpg",
  },
  {
    name: "Mick Fowler & Victor Saunders",
    title: "First Ascent of Yawash Sar II",
    description:
      "Despite their ages (68 & 74), these veteran climbers tackled the untouched peak, proving passion has no limits.",
    quote: "Age is just a number when adventure calls.",
    image: "/mfvs.jpg",
  },
];

const Stories = () => {
  return (
    <div className="success-stories-container">
      <div className="stories-grid">
        {successStories.map((story, index) => (
          <div className="story-card" key={index}>
            <div className="image-container">
              <img src={story.image} alt={story.title} className="story-image" />
            </div>
            <div className="story-content">
              <h3 className="story-title">{story.title}</h3>
              <p className="story-description">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
