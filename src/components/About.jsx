import React from "react";
import "../styles/about.css";
import CarouselOne from "./CarouselOne";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutLeft">
        <h2 className="aboutTitle">ABOUT</h2>
        <p className="aboutDesc">
          The main discussion topics at PixaVibe often pave the way to
          surprising and unexpected conversations thanks to our engaged users.
          Our Forum is dedicated to enhancing the online experience by offering
          plenty of opportunities for users to engage with each other in an
          interesting and safe online environment.
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
