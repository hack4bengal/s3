import React, { useEffect } from "react";
import "./Events.scss";
import SpeakerSchedule from "../../components/private/speakerschedule/SpeakerSchedule";
import speakers from "../../assets/data/SpeakersContent";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="events">
        <SpeakerSchedule />
      </div>
    </>
  );
};

export default Events;