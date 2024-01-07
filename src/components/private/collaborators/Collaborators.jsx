import React from "react";
import collaborators from "../../../assets/data/CollaboratorsContent";
import HeaderData from "../../../assets/data/HeaderContent";
import { Header } from "../../shared";
import "./Collaborators.scss";

const Collaborators = () => {
  return (
    <div className="collaborators__parent">
      <div className="collaborators__header disable-select">
        <Header {...HeaderData.collaborators} />
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
