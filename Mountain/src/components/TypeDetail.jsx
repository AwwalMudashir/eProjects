import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TypeDetail.css";
import typesArr from "../json/types.json";

const TypeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const type = typesArr.find((t) => t.id.toString() === id);

  if (!type) return <h2>Type not found!</h2>;

  return (
    <div className="type-detail-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${type.image})` }}>
        <h1 className="hero-title">{type.name}</h1>
      </div>

      {/* Details Section */}
      <div className="details-content">
        <h2>{type.name}</h2>
        <ul>
          {type.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      </div>
    </div>
  );
};

export default TypeDetail;
