import React, { useEffect, useState } from "react";
import "./visitor.css"; // External CSS file

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let count = localStorage.getItem("visitorCount");

    if (!count) {
      count = 1; // Start from 1 if no previous count
    } else {
      count = parseInt(count) + 1; // Ensure proper number increment
    }

    localStorage.setItem("visitorCount", count);
    setVisitorCount(count);
  }, []);

  return (
    <div className="visitor-header">
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <div className="visitor-count">
        Visitors: <span>{visitorCount}</span>
      </div>
    </div>
  );
};

export default VisitorCounter;
