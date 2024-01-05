import React, { useState, useEffect } from "react";
import "./Collaborators.scss";
import collaboratorsContent from "../../assets/data/CollaboratorsContent";
// import ComingSoon from "../comingsoon/ComingSoon";

const Collaborators = ({ refs }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="collaborators__parent" ref={refs}>
      <div className="collaborators__header disable-select">
        <h1>{windowWidth > 1280 ? collaboratorsContent.title.back.main : collaboratorsContent.title.back.alt}</h1>
        <h2>{collaboratorsContent.title.main}</h2>
      </div>
      {/* <ComingSoon /> */}
      <div className="collaborators__flexbox__container">
        <div className="collaborators__flexbox">
          {
            collaboratorsContent.collaborators.map(
              (collaborator, index) => {
                return (
                  <img src={collaborator} key={index} alt="" />
                )
              }
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
