import React from "react";
import "./success.css";
import Stories from "./Stories";

const clubs = [
  {
    name: "Everest Mountaineers",
    location: "Kathmandu, Nepal",
    description: "Guided expeditions to Everest and other Himalayan peaks.",
  },
  {
    name: "Alpine Explorers",
    location: "Chamonix, France",
    description: "Adventure tours across the Alps with expert guides.",
  },
  {
    name: "Rock Climbers Club",
    location: "Colorado, USA",
    description: "Specialized in rock climbing and high-altitude training.",
  },
];


const Success = () => {
  return (
    <div className="homepage-container scroll-element">
      {/* Groups/Organizations Section */}
      <section className="groups-section scroll-element">
        <h2>Mountaineering Clubs & Organizations</h2>
        <div className="groups-list">
          {clubs.map((club, index) => (
            <div key={index} className="group-card">
              <h3>{club.name}</h3>
              <p><strong>Location:</strong> {club.location}</p>
              <p>{club.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="map-section scroll-element">
        <h2>Mountaineering Locations</h2>
        <div className="map-container gap-[20px]">
          <iframe
            title="Mountaineering Locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913528.049046639!2d85.31879255!3d28.394857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e8a524664b7e2f%3A0x67c2dc5f0d1c1e0d!2sMount%20Everest!5e0!3m2!1sen!2s!4v1679876543210"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
   <iframe
  title="Mount Kilimanjaro Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127494.47465714403!2d37.1790011!3d-3.0674241500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371ffb1b3e3ebd%3A0x71a33517a95766a6!2sMount%20Kilimanjaro!5e0!3m2!1sen!2s!4v1679876543210"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>

<iframe
  title="Mont Blanc Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44745.9936420921!2d6.80808495!3d45.83262205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478939d923f735fd%3A0x50b82c3688b7030!2sMont%20Blanc!5e0!3m2!1sen!2s!4v1679876543210"
  allowfullscreen
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>

        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories scroll-element">
        <h2 style={{color:"white"}}>Success Stories</h2>
       <Stories/>
      </section>
    </div>
  );
};

export default Success;
