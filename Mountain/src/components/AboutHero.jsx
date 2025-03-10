import React from "react";
import "./components.css";

const AboutHero = () => {
  return (
    <div >

    <div className="w-[100%] h-[100vh] mb-[40px] video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/about-mtn2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Explore Mountaineering</h1>
        <p>Learn the essentials of mountaineering, to get you started now !</p>
        {/* <i className="fas fa-arrow-down text-[30px]"></i> */}
      </div>
    </div>
     </div>
  );
};

export default AboutHero;
