import React from "react";

import "./TeamCard.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

const TeamCard = ({ img, name, position, linkedin, domain }) => (
  <div className="hack4bengal__team-card">
    <div className="hack4bengal__team-card-img">
      <img src={img} alt="team-card-img" />
    </div>
    <div className="hack4bengal__team-card-content">
      <h3 className="name">
        {name.split("\n").map((str, index) => (
          <span key={index}>
            {str}
            <br />
          </span>
        ))}
      </h3>

      <h4 className="domain">{domain}</h4>
      <h4 className="title">{position}</h4>
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

export default TeamCard;
