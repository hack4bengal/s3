/* eslint-disable react/prop-types */
import React from "react";
import "./BrandCard.scss";

function BrandCard({brandItem}) {
  const {image, name} = brandItem;
  return (
    <div className="brand_card">
      <div className="brand_card__image">
        <img src={image} alt="Hack4Bengal" />
      </div>
      <div className="brand_card__contents">
        <div className="brand_card__text">
          <p>{name}</p>
        </div>
        <div className="brand_card__download-button">
          <a href={image} download>
            Download File
          </a>
        </div>
      </div>
    </div>
  );
}

export default BrandCard;
