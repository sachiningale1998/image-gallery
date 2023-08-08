import React from "react";
import NavbarOne from "../components/NavbarOne";
import Intro from "../components/Intro";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <NavbarOne />
      <Intro />
      <About />
      <h1 className="text-3xl font-bold underline">
        Welcome to image gallery app
      </h1>
    </>
  );
};

export default Home;
