/* eslint-disable react/prop-types */
import React from "react";
import "./BrandCard.scss";

function BrandCard({ brandItem }) {
  const { image, name } = brandItem;
  return (
    <div className="brand_card">
      <div className="brand_card__image">
        <img src={image} alt="" />
      </div>
      <div className="brand_card__contents">
        <div className="brand_card__text">
          <p>{name}</p>
        </div>
        <div className="brand_card__download-button">
          <a href={image} download>
            PNG
          </a>
        </div>
      </div>
    </div>
  );
}

export default BrandCard;
