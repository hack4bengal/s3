import React from "react";
import Marquee from "react-fast-marquee";
import HeaderData from "../../../assets/data/HeaderContent";
import testimonials from "../../../assets/data/TestimonialContent";
import { Header } from "../../shared";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials__parent" id="testimonials">
      <Header {...HeaderData.testimonials} />
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
