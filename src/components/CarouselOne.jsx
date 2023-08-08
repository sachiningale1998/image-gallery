import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PixavibeHomepageBG1 from "../gallery/PixavibeHomepageBG1.jpg";
import PixavibeHomepageBG2 from "../gallery/PixavibeHomepageBG2.jpg";
import PixavibeHomepageBG3 from "../gallery/PixavibeHomepageBG3.jpg";

const CarouselOne = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PixavibeHomepageBG1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PixavibeHomepageBG2}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PixavibeHomepageBG3}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5> */}
          {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselOne;
