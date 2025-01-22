/* eslint-disable react/prop-types */
import React from "react";
import "./BrandCard.scss";

function BrandCard({ brandItem }) {
  return (
    <div className="brand_card">
      <div className="brand_card__image">
        <img src={brandItem?.image} alt="Hack4Bengal" />
      </div>
      <div className="brand_card__contents">
        <div className="brand_card__text">
          <p>
            {brandItem?.title
              .replace(/-/g, " ")
              .replace(/\b\w/g, (char) => char.toUpperCase())}
          </p>
        </div>
        <div className="brand_card__download-button">
          <a href={brandItem?.image} download>
            Download File
          </a>
        </div>
      </div>
    </div>
  );
}

export default BrandCard;
