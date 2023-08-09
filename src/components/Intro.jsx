import React from "react";
import "../styles/intro.css";
import { Button } from "react-bootstrap";
import ReactiveButton from "reactive-button";
import Logo1 from "../gallery/Logo1.png"
import Search from "./Search";

const Intro = () => {
  return (
    <div className="introContainer">
      <div className="introParent">
        <div className="introDesc">
          {/* <img src={Logo1} alt="logo1" style={{mixBlendMode: 'screen'}} /> */}
          <h1 className="text-6xl text-white dark:text-gray-200 font-bold">
            PixaVibe
          </h1>
          <h4 className="text-xl text-white introH4">
            Download awesome pics for free !!!
          </h4>
          <Search />
          <ReactiveButton
            className="introPrimaryBtn"
            style={{ fontSize: "16px", borderRadius: "5px" }}
            idleText="Contribute"
          ></ReactiveButton>
        </div>
      </div>
    </div>
  );
};

export default Intro;
