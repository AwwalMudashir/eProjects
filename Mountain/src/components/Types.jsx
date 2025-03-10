import React from "react";
import { useNavigate } from "react-router-dom";
import "./Types.css";
import typesArr from "../json/types.json";

const Types = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] pl-[1%] scroll-element">
    <div className="types-container">
      {/* Intro Section */}
      <div className="intro-section">
        <h1>Types and Styles of Mountaineering</h1>
        <p>
          Mountaineering is a diverse and multifaceted activity that encompasses a wide range of types and styles, 
          each requiring unique skills, equipment, and approaches. Below is an in-depth exploration of the main types 
          and styles of mountaineering.
        </p>
      </div>

      {/* Card Grid Layout */}
      <div className="types-grid">
        {typesArr.map((type) => (
          <div
            key={type.id}
            className="type-card"
            onClick={() => navigate(`/type/${type.id}`)} // Navigate on click
          >
            <img src={type.image} alt={type.name} className="card-image" />
            <h2 className="card-title">{type.name}</h2>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Types;
