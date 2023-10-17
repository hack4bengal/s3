import React from "react";

import "./TestimonialCard.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const TestimonialCard = ({
  img,
  name,
  position,
  facebook,
  twitter,
  linkedin,
  github,
  domain,
  testimonial,
}) => {
  return (
    <div className="hack4bengal__testimonial-cards">
      <div className="hack4bengal__testimonial-card-img">
        <img src={img} alt="team-card-img" />
      </div>
      <div className="hack4bengal__testimonial-card-content">
        {/*  <h3 className="name">{name}</h3> */}
        {name.split("\n").map((line, index) => (
          <h3 key={index} className="name">
            {line}
          </h3>
        ))}
        <h4 className="title">{position}</h4>
        <h4 className="domain">{domain}</h4>
        <h4 className="testimonial">" {testimonial} "</h4>
      </div>
      <ul className="social">
        <li>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="fa fa-linkedin"
            aria-hidden="true"
          ></a>
        </li>
      </ul>
    </div>
  );
};

export default TestimonialCard;
