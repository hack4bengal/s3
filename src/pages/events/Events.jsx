import React, { useEffect } from "react";
import SpeakerSchedule from "../../components/private/speakerschedule/SpeakerSchedule";
import "./Events.scss";

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
