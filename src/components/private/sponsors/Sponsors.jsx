import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import sponsors from "../../../assets/data/SponsorsContent";
import { Header } from "../../shared";
import "./Sponsors.scss";
import SingleSponsors from "./singlesponsors/SingleSponsors";
import Marquee from "react-fast-marquee";

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
        <div className="sponsors__container gold_container">
          <h1>Silver Sponsors</h1>
          <div className="sponsors__flexbox">
            {sponsors["Silver"].map((item, index) => {
              return (
                <SingleSponsors key={index} sponsor={item} type="silver" />
              );
            })}
          </div>
        </div>
        <div className="sponsors__container gold_container">
          <h1>Venue & Education Partner</h1>
          <div className="sponsors__flexbox">
            {sponsors["Education"].map((item, index) => {
              return (
                <SingleSponsors key={index} sponsor={item} type="silver" />
              );
            })}
          </div>
        </div>

        <div className="sponsors__container_flex">
          <div className="sponsors__container domain_container">
            <h1>Bronze Sponsor</h1>
            <div className="sponsors__flexbox">
              {sponsors["Bronze"].map((item, index) => {
                return (
                  <SingleSponsors key={index} sponsor={item} type="bronze" />
                );
              })}
            </div>
          </div>
        </div>
        <div className="sponsors__container domain_container">
          <h1>Track Partner</h1>
          <div className="sponsors__flexbox">
            {sponsors["Track"].map((item, index) => {
              return <SingleSponsors key={index} sponsor={item} type="track" />;
            })}
          </div>
        </div>
        <div className="sponsors__container_flex">
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
          <div className="sponsors__container domain_container">
            <h1>Merchandise Partner</h1>
            <div className="sponsors__flexbox">
              {sponsors["Merchandise"].map((item, index) => {
                return (
                  <SingleSponsors
                    key={index}
                    sponsor={item}
                    type="merchandise"
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="sponsors__container gold_container">
          <h1>Digital Media Partner</h1>
          <div className="sponsors__flexbox">
            {sponsors["digitalMedia"].map((item, index) => {
              return (
                <SingleSponsors key={index} sponsor={item} type="silver" />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
