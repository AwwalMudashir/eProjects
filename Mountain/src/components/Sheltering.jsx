import React, { useEffect, useState } from "react";
import "./components.css";
import sheltersData from "../json/shelters.json";

const ShelterTimeline = () => {
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    setShelters(sheltersData);
  }, []);

  return (
    <div className="s-timeline-container scroll-element">
      <div className="s-timeline">
        {shelters.map((shelter, index) => (
          <div key={shelter.id} className={`s-timeline-item ${index % 2 === 0 ? "s-left" : "s-right"} scroll-element`}>
            <div className="s-content">
              <h2>{shelter.name}</h2>
              <p>{shelter.description}</p>
              <strong>Examples:</strong>
              <ul>
                {shelter.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
              <p className="s-use-case"><strong>Use Case:</strong> {shelter.use_case}</p>
            </div>
            <div className="s-arrow"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShelterTimeline;
