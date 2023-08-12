import React from "react";
import "../styles/about.css";
import CarouselOne from "./CarouselOne";

const About = () => {
  return (
    <div id="about" className="aboutContainer">
      <div className="aboutLeft">
        <h2 className="aboutTitle">ABOUT</h2>
        <p className="aboutDesc">
          Discover a world of limitless creativity with PixaVibe,
          your ultimate destination for free, high-quality image downloads. Our
          platform is tailored for creators, designers, and visionaries who
          demand stunning visuals without the price tag. Unleash your
          imagination – no fees, no limits, just boundless inspiration.
        </p>
      </div>
      <div className="aboutRight">
        <div className="carouselContainer">
          <CarouselOne />
        </div>
      </div>
    </div>
  );
};

export default About;
