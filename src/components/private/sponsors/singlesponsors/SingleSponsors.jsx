import React from "react";
import "./SingleSponsors.scss";

const SingleSponsors = ({ sponsor, type }) => {
  return (
    <a href={sponsor?.link} target="_blank" rel="noopener noreferrer">
      <div
        className={`single__sponsor ${
          type === "gold" ? "gold" : type === "platinum" ? "platinum" : ""
        }`}
      >
        <img src={sponsor?.img} alt={sponsor?.name} loading="lazy" />
      </div>
    </a>
  );
};

export default SingleSponsors;
