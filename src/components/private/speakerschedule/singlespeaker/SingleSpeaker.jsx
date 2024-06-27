import React from "react";
import "./SingleSpeaker.scss";

const SingleSpeaker = ({ speaker }) => {
  return (
    <div className="nft">
      <div className="main">
        <img
          className="tokenImage"
          src={speaker?.image}
          alt={speaker?.name}
          loading="lazy"
        />
        <div className="mentor__info">
          <h2>{speaker?.topic}</h2>
          <p className="description">{speaker?.date}</p>
          <p className="description">{speaker?.company}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleSpeaker;
