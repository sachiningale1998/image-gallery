import React from "react";
import NavbarOne from "../components/NavbarOne";
import Intro from "../components/Intro";
import About from "../components/About";
import GridThree from "../components/GridThree";
import { createClient } from 'pexels';
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [imagesData, setImagesData] = useState([])
  const client = createClient('gx6tAiWhFkzbNpiMSMRcOLR95zM2kVXP6PswvvUEqzlNaQurBqRsWfSp');
  const query = 'interesting';
  useEffect(()=>{
    client.photos.search({ query, per_page: 40 }).then(data => setImagesData(data.photos)).catch(err => console.log(err));
  }, [])

  return (
    <>
      <NavbarOne />
      <Intro />
      <About />
      {imagesData && <GridThree data={imagesData} />}
      {/* <h1 className="text-3xl font-bold underline">
        Welcome to image gallery app
      </h1> */}
    </>
  );
};

export default Home;
