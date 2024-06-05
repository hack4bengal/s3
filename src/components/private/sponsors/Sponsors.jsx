import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import sponsors from "../../../assets/data/SponsorsContent";
import { Header } from "../../shared";
import "./Sponsors.scss";
import SingleSponsors from "./singlesponsors/SingleSponsors";

const Sponsors = () => {
  return (
    <>
      <div className="sponsors__parent" id="sponsors">
        <Header {...HeaderData.sponsors} />

        <div className="sponsors__container gold_container">
          <h1>Platinum Sponsor</h1>
          <div className="sponsors__flexbox">
            {sponsors["Platinum"].map((item, index) => {
              return (
                <SingleSponsors key={index} sponsor={item} type="platinum" />
              );
            })}
          </div>
        </div>
        <div className="sponsors__container gold_container">
          <h1>Gold Sponsors</h1>
          <div className="sponsors__flexbox">
            {sponsors["Gold"].map((item, index) => {
              return <SingleSponsors key={index} sponsor={item} type="gold" />;
            })}
          </div>
        </div>

        <div className="sponsors__container domain_container">
          <h1>Silver Sponsor</h1>
          <div className="sponsors__flexbox">
            {sponsors["Silver"].map((item, index) => {
              return (
                <SingleSponsors key={index} sponsor={item} type="silver" />
              );
            })}
          </div>
        </div>

        <div className="sponsors__container_flex">
          {/* <div className="sponsors__container">
            <h1>Venue Partner</h1>
            <div className="sponsors__flexbox">
              {sponsors["Venue"].map((item, index) => {
                return (
                  <SingleSponsors key={index} sponsor={item} type="silver" />
                );
              })}
            </div>
          </div> */}

          <div className="sponsors__container domain_container">
            <h1>Domain Partner</h1>
            <div className="sponsors__flexbox">
              {sponsors["Domain"].map((item, index) => {
                return (
                  <SingleSponsors key={index} sponsor={item} type="domain" />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
