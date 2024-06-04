import React from "react";
import "./SpeakerSchedule.scss";
import SingleSpeaker from "./singlespeaker/SingleSpeaker";
import speakers from "../../../assets/data/SpeakersContent";
import { Header } from "../../shared";
import HeaderData from "../../../assets/data/HeaderContent";

const SpeakerSchedule = () => {
  return (
    <div className="speakerschedule">
      <Header {...HeaderData.events} />
      <div className="speakerschedule__container">
        {
          speakers.map(
            (speaker, index) => (
              <SingleSpeaker key={index} speaker={speaker} />
            )
          )
        }
      </div>
    </div>
  );
};

export default SpeakerSchedule;