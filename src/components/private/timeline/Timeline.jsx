import React, { useState, useEffect } from "react";
import "./Timeline.scss";
import HeaderData from "../../../assets/data/HeaderContent";
import { Header } from "../../shared";
import { EventTimeline } from "../../../assets/data/Timeline";

const Timeline = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timeline">
      <Header {...HeaderData.timeline} />
      <div className="timeline__content">
        {EventTimeline.map((event, index) => (
          <div key={index} className="timeline__event">
            <div className="timeline__image-container">
              <img
                src={currentDate > event.date ? event.activeImage : event.inactiveImage}
                alt={event.alt}
              />
            </div>
            <p className="timeline__date">{event.displayDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
