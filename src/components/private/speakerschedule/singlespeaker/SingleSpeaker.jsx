import React from "react";
import "./SingleSpeaker.scss";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleSpeaker = ({ speaker }) => {
  SingleSpeaker.propTypes = {
    speaker: propTypes.shape({
      image: propTypes.string,
      topic: propTypes.string,
      date: propTypes.string,
      time: propTypes.string,
      button: propTypes.shape({
        icon: propTypes.string,
        text: propTypes.string,
        link: propTypes.string,
      }),
    }),
  };

  return (
    <div className="singlespeaker">
      <span className="singlespeaker__shadow" />
      <div
        className="singlespeaker__left"
        style={{
          backgroundImage: `url(${speaker.image})`
        }}
      />
      <div className="singlespeaker__right">
        <h3>{speaker.topic}</h3>
        <div className="singlespeaker__right__container">
          <div className="singlespeaker__right__date">
            <p>
              {speaker.date}
            </p>
          </div>
          <Link
            className="singlespeaker__right__button"
            to={speaker.button.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={speaker.button.icon} alt="Button Icon" />
            <p>{speaker.button.text}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleSpeaker;