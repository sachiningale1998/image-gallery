import React from "react";
import NavbarOne from "../components/NavbarOne";
import Intro from "../components/Intro";
import About from "../components/About";
import GridThree from "../components/GridThree";
import { createClient } from 'pexels';
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Contact from "../components/Contact";

const Home = () => {
  const [imagesData, setImagesData] = useState([]);
  const searchData = useSelector(state=> state.searchData);
  const client = createClient('gx6tAiWhFkzbNpiMSMRcOLR95zM2kVXP6PswvvUEqzlNaQurBqRsWfSp');
  const query = 'trending';
  useEffect(()=>{
    client.photos.search({ query, per_page: 18 }).then(data => setImagesData(data.photos)).catch(err => console.log(err));
  }, [])

  return (
    <>
      <NavbarOne />
      <Intro />
      {searchData && <GridThree data={searchData} /> }
      <About />
      {imagesData && <GridThree data={imagesData} />}
      <Contact />
    </>
  );
};

export default Home;
