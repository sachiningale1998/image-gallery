import React from "react";
import Carousel from "react-bootstrap/Carousel";
import aboutCarousel1 from "../gallery/aboutCarousel1.jpg";
import aboutCarousel2 from "../gallery/aboutCarousel2.jpg";
import aboutCarousel3 from "../gallery/aboutCarousel3.jpg";

const CarouselOne = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={aboutCarousel1}
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
          src={aboutCarousel2}
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
          src={aboutCarousel3}
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
