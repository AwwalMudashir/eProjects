import React, { useState, useEffect } from "react";
import "./Techniques.css";
import techniquesData from "../json/techniques.json";

const Techniques = () => {
  const [techniques, setTechniques] = useState([]);

  useEffect(() => {
    setTechniques(techniquesData);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" w-[100%] m-[auto] pl-[2.5%] mb-[30px] mt-[30px]">
    <div className="techniques-container">
      {/* Intro Section */}
      <div className="intro-section">
        <h1>TECHNIQUES</h1>
        <p>Mountaineering requires a mix of skills and techniques to handle different terrains and conditions. Here are some essential mountaineering techniques:</p>
      </div>

      {/* Accordion Section */}
      <div className="accordion">
        {techniques.map((category, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-header ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              {category.category}
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="accordion-content">
                {category.techniques.map((tech, techIndex) => (
                  <div key={techIndex} className="technique-card">
                    <img src={tech.image} alt={tech.name} className="technique-image" />
                    <h3>{tech.name}</h3>
                    <p>{tech.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Techniques;
