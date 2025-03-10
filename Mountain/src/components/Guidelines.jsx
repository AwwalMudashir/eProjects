import React from "react";
import "./Guidelines.css";

const guidelines = [
  { id: 1, title: "Proper Gear", desc: "Always use high-quality gear suitable for the climb.", icon: "🎒" },
  { id: 2, title: "Weather Awareness", desc: "Check forecasts and be prepared for sudden changes.", icon: "🌦️" },
  { id: 3, title: "Physical Fitness", desc: "Train adequately to handle the demands of mountaineering.", icon: "🏋️" },
  { id: 4, title: "Safety Protocols", desc: "Follow rope techniques and emergency procedures.", icon: "⚠️" },
  { id: 5, title: "Leave No Trace", desc: "Respect nature by minimizing your environmental impact.", icon: "🌿" },
  { id: 6, title: "Navigation Skills", desc: "Know how to read maps, use a compass, and GPS devices.", icon: "🧭" },
];

const Guidelines = () => {
  return (
    <div className="guidelines-container scroll-element mb-[40px]">
      <h2 className="guidelines-title">General Guidelines for Mountaineering</h2>
      <div className="infographic mx-auto mt-[20px] ">
        {guidelines.map((item, index) => (
          <div key={item.id} className="guideline-item scroll-element">
            <div className="guideline-content">
            <div className="guideline-icon">{item.icon}</div>
            <div className="to">

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guidelines;
