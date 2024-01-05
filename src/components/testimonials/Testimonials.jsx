import React from "react";
import Marquee from "react-fast-marquee";
import testimonials from "../../assets/data/TestimonialContent";
import "./Testimonials.scss";

const Testimonials = ({ refs }) => {
  return (
    <div className="testimonials__parent" ref={refs}>
      <div className="testimonials__header">
        <h1>Stories</h1>
        <h2>Testimonials</h2>
      </div>
      <Marquee
        autoFill={true}
        pauseOnHover={true}
        className="testimonials__container"
        speed={50}
        direction="right"
      >
        {testimonials?.slice(0, 3).map((item, index) => {
          return (
            <div className="testimonials__card" key={index}>
              <p className="testimonials__text">{item?.testimonial}</p>

              <div className="testimonials__card_footer">
                <img src={item?.img} alt="" />

                <div className="testimonials__card_author">
                  <h2>{item?.name}</h2>
                  <p>{item?.position}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>

      <Marquee
        autoFill={true}
        pauseOnHover={true}
        className="testimonials__container"
        speed={50}
        direction="left"
      >
        {testimonials?.slice(3).map((item, index) => {
          return (
            <div className="testimonials__card large" key={index}>
              <p className="testimonials__text">{item?.testimonial}</p>

              <div className="testimonials__card_footer">
                <img src={item?.img} alt="" />

                <div className="testimonials__card_author">
                  <h2>{item?.name}</h2>
                  <p>{item?.position}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Testimonials;
