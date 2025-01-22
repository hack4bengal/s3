import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { brandContent } from "../../assets/data/BrandContent.js";
import HeaderData from "../../assets/data/HeaderContent";
import { Header } from "../../components/shared";
import "./Brand.scss";
import BrandCard from "./brandcard/BrandCard.jsx";

function Brand() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("regular");

  return (
    <>
      <div className="brand">
        <div className="brand__content">
          <Header {...HeaderData.brand} />

          <div className="brand_container">
            <div className="brand_category">
              <div
                className={clsx(
                  "brand_categoryName",
                  activeCategory === "regular" && "active"
                )}
                onClick={() => setActiveCategory("regular")}
              >
                Regular <span>Logo</span>
              </div>
              <div
                className={clsx(
                  "brand_categoryName",
                  activeCategory === "transparent" && "active"
                )}
                onClick={() => setActiveCategory("transparent")}
              >
                Transparent <span>Logo</span>
              </div>
            </div>

            <div className="brand_flexbox">
              {activeCategory === "regular"
                ? brandContent.regularImages.map((brandItem, brandIndex) => (
                    <BrandCard key={brandIndex} brandItem={brandItem} />
                  ))
                : brandContent.transparentImages.map(
                    (brandItem, brandIndex) => (
                      <BrandCard key={brandIndex} brandItem={brandItem} />
                    )
                  )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
