import React from "react";
import "./SingleSponsors.scss";
import clsx from "clsx";

const SingleSponsors = ({ sponsor, type }) => {
  const style = {};

  return (
    <a href={sponsor?.link} target="_blank" rel="noopener noreferrer">
      <div
        className={clsx(
          "single__sponsor",
          type,
          sponsor?.cn,
          sponsor?.name === "GDG Cloud Kolkata" && "gdg"
        )}
      >
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
