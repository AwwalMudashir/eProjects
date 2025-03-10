import React from "react";
import "./Advancements.css"; // External CSS for styling

const advancements = [
  {
    title: "Advanced Materials and Gear",
    description:
      "Lighter and more durable gear enhances climbing efficiency while reducing fatigue. Smart fabrics improve insulation and breathability.",
    iconClass: "fas fa-mountain",
  },
  {
    title: "Technological Integration",
    description:
      "GPS devices, biometric monitoring, and AI-enhanced gear provide climbers with real-time feedback and improved safety.",
    iconClass: "fas fa-cogs",
  },
  {
    title: "Sustainability Initiatives",
    description:
      "Eco-friendly materials and ethical manufacturing help reduce mountaineering's environmental impact.",
    iconClass: "fas fa-leaf",
  },
  {
    title: "Personalized & Customizable Gear",
    description:
      "Custom-fitted gear and modular designs provide climbers with tailored solutions for their expeditions.",
    iconClass: "fas fa-tools",
  },
  {
    title: "Enhanced Safety Features",
    description:
      "Advanced avalanche beacons, automatic locking mechanisms, and improved protection systems increase climber safety.",
    iconClass: "fas fa-shield-alt",
  },
  {
    title: "Energy Efficiency & Power Solutions",
    description:
      "Solar-powered gear, rechargeable batteries, and efficient heating systems help climbers stay powered in extreme conditions.",
    iconClass: "fas fa-bolt",
  },
];

const Advancements = () => {
  return (
    <section className="advancements-section scroll-element">
      {/* Intro Section */}
      <div className="intro">
        <h2>Latest Materials and Developments in Mountaineering</h2>
        <p>
          Mountaineering has evolved significantly, integrating cutting-edge
          materials and smart technology while prioritizing sustainability and
          safety. Here are the latest advancements shaping modern climbing.
        </p>
      </div>

      {/* Advancements Grid */}
      <div className="advancements-grid">
        {advancements.map((item, index) => (
          <div key={index} className="advancement-card scroll-element">
            <i className={item.iconClass}></i>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advancements;
