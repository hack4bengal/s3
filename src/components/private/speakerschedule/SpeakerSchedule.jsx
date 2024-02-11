import React from "react";
import "./SpeakerSchedule.scss";
import SingleSpeaker from "./singlespeaker/SingleSpeaker";
import speakers from "../../../assets/data/SpeakersContent";

const SpeakerSchedule = () => {
  return (
    <div className="speakerschedule">
      <h1 className="speakerschedule__title">Online Speaker Schedule</h1>
      <div className="speakerschedule__container">
        {
          speakers.map(
            (speaker) => (
              <SingleSpeaker key={speaker.id} speaker={speaker} />
            )
          )
        }
      </div>
    </div>
  );
};

export default SpeakerSchedule;