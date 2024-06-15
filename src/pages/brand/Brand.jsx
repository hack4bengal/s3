import React, { useEffect } from "react";
import { brandContent } from "../../assets/data/BrandContent.js";
import "./Brand.scss";
import BrandCard from "./brandcard/BrandCard.jsx";
import HeaderData from "../../assets/data/HeaderContent";
import { Header } from "../../components/shared";


function Brand() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="brand">
        <div className="brand__content">
          <Header {...HeaderData.brand} />
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
