import React from "react";
import Slider from "react-slick";

const index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        {/* <div className="absolute right-0 left-0 bg-stone-500 "> */}
        <Slider {...settings}>
          <div>{/* <img src="http://placekitten.com/400/200" /> */}</div>
          <div>{/* <img src="http://placekitten.com/400/200" /> */}</div>
        </Slider>
      </div>
    </>
  );
};

export default index;
