import React from "react";

import "./EventCard.css";

const EventCard = ({ img, title, date }) => {
  return (
    <div className="hack4bengal__section3-card">
      <img className="hack4bengal__section3-image" src={img} alt="h4b" />
      <div className="hack4bengal__section3-cardTitle">{title}</div>
      <div className="hack4bengal__section3-divider"></div>
      <div className="hack4bengal__section3-details">{date}</div>
    </div>
  );
};

export default EventCard;
