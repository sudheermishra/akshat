import React from "react";
import Slider from "react-slick";
import img from "../../assets/WhatsApp Image 2024-05-17 at 8.45.07 AM.jpeg";
import "./SliderCard.css";

const SliderCard = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    // afterChange: function (index) {
    //   console.log(`Slider changed to: ${index + 1}`);
    // },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides below 768px
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1, // Show 1 slide below 576px
        },
      },
    ],
  };

  // const settings = {
  //   infinite: true,
  //   slidesToShow: 1, // Show only 1 slide at a time
  //   slidesToScroll: 1,
  //   swipeToSlide: true,
  //   centerMode: true,
  //   centerPadding: "0",
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1, // Maintain 1 slide below 1024px
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 1, // Maintain 1 slide below 576px
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="slider-card">
            <div className="image">
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
            <div className="content">
              <h3>Title {index + 1}</h3>
              <p className="projects-details">
                Description for card {index + 1}. Customize it accordingly.
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCard;
