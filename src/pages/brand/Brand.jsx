import React, { useEffect } from "react";
import { brandContent } from "../../assets/data/BrandContent.js";
import "./Brand.scss";
import BrandCard from "./brandCard/BrandCard";
function Brand() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="brand">
        <div className="brand__content">
          <h1 className="heading">Brands</h1>
          <div className="brandCards__parent">
            {brandContent.map((brandItem, brandIndex) => (
              <BrandCard key={brandIndex} brandItem={brandItem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
