import React from "react";

import "./NewTeam.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const NewTeamCard = ({
  img,
  name,
  position,
  facebook,
  twitter,
  linkedin,
  github,
  domain,
}) => {
  return (
    <div className="hack4bengal__team-cards">
      <div className="hack4bengal__team-card-img">
        <img src={img} alt="team-card-img" />
      </div>
      <div className="hack4bengal__team-card-content">
        <h3 className="name">{name}</h3>
        <h4 className="title">{position}</h4>
        <h4 className="domain">{domain}</h4>
      </div>
      <ul className="social">
        <li>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="fa fa-linkedin"
            aria-hidden="true"
          ></a>
        </li>
      </ul>
    </div>
  );
};

export default NewTeamCard;
