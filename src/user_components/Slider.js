import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1676269481715_rtuindiaweb.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://assets-in.bmscdn.com/promotions/cms/creatives/1676013430260_web.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      
    </>
  );
}

export default Slider;
