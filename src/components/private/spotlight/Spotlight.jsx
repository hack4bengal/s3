import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import spotlightContent from "../../../assets/data/SpotLightContent";
import { Header } from "../../shared";
import "./Spotlight.scss";

const Spotlight = () => {
  const data = [{}];

  return (
    <>
      <div className="spotlight_parent" id="venue">
        <Header {...HeaderData.spotlight} />

        <div className="spotlight_container">
          {spotlightContent?.map((data, index) => {
            return (
              <div className="nft">
                <div className="main">
                  <img
                    className="tokenImage"
                    src="https://assets.telegraphindia.com/telegraph/2024/Jun/1719311267_edugraph-26.jpg"
                    alt={data?.name}
                    loading="lazy"
                  />
                  <div className="mentor__info">
                    <h2>{data?.topic}</h2>
                    <p className="description">The Telegraph | {data?.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Spotlight;
