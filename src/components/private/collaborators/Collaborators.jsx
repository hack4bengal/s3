import React from "react";
import collaborators from "../../../assets/data/CollaboratorsContent";
import { Header } from "../../shared";
import "./Collaborators.scss";

const Collaborators = ({ refs }) => {
  return (
    <div className="collaborators__parent" ref={refs}>
      <div className="collaborators__header disable-select">
        <Header
          backWord={"Collaborators"}
          backWordMobile={"Collab"}
          frontWord={"Past Collaborations"}
        />
      </div>

      <div className="collaborators__flexbox__container">
        <div className="collaborators__flexbox">
          {collaborators.map((collaborator, index) => {
            return <img src={collaborator} key={index} alt={collaborator} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
