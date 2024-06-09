import React, { useState, useEffect } from "react";
import "./Timeline.scss";
import HeaderData from "../../../assets/data/HeaderContent";
import { Header } from "../../shared";
import { EventTimeline } from "../../../assets/data/Timeline";
import Modal from "./Modal";

const Timeline = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && <Modal closeModal={closeModal} />}
      <div className="timeline">
        <Header {...HeaderData.timeline} />
        <div className="timeline__content">
          {EventTimeline.map((event, index) => (
            <div key={index} className="timeline__event">
              <div className="timeline__d-flex">
                <p
                  className={`timeline__number ${
                    currentDate > event.date ? "active" : "inactive"
                  }`}
                >
                  {event.number}
                </p>
                <div
                  className={`timeline__circle_details ${
                    index === 0 ? "first-circle" : ""
                  }`}
                >
                  <img src={event.ringImg} alt="timeline" />
                  <p>{event.circleText}</p>
                </div>
              </div>
              <button
                className="timeline__date"
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                {event.displayDate}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
