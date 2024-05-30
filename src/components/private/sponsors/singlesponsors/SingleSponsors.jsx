import React from "react";
import "./SingleSponsors.scss";

const SingleSponsors = ({ sponsor, type }) => {
  const style = sponsor?.name === "xyz" ? { minWidth: "100px" } : {};

  return (
    <a href={sponsor?.link} target="_blank" rel="noopener noreferrer">
      <div className={`single__sponsor ${type}`}>
        <img
          src={sponsor?.img}
          alt={sponsor?.name}
          loading="lazy"
          style={style}
        />
      </div>
    </a>
  );
};

export default SingleSponsors;
