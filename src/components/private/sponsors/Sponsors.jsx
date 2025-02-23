import React from "react";
import Marquee from "react-fast-marquee";
import HeaderData from "../../../assets/data/HeaderContent";
import sponsors from "../../../assets/data/SponsorsContent";
import { Header } from "../../shared";
import SingleSponsors from "../sponsors/singlesponsors/SingleSponsors";
import "./Sponsors.scss";

const Sponsors = () => {
  const sponsorList = Object.entries(sponsors)
    .filter(([category]) => category !== "Community") // Exclude "Community"
    .flatMap(([, items]) => items); // Flatten the remaining sponsors

  console.log("Hello");

  return (
    <>
      <div className="sponsors__parent" id="sponsors">
        <Header {...HeaderData.sponsors} />

        <div className="sponsors__container_flex">
          <div className="sponsors__container domain_container">
            <div className="sponsors__flexbox community">
              <Marquee
                autoFill={true}
                pauseOnHover={true}
                className="testimonials__container"
                speed={60}
                direction="right"
              >
                {sponsorList.slice(0, 10)?.map((item, index) => {
                  return (
                    <SingleSponsors key={index} sponsor={item} type="silver" />
                  );
                })}
              </Marquee>
            </div>
            <br />
            <br />
            <div className="sponsors__flexbox community">
              <Marquee
                autoFill={true}
                pauseOnHover={true}
                className="testimonials__container"
                speed={60}
                direction="left"
              >
                {sponsorList.slice(10)?.map((item, index) => {
                  return (
                    <SingleSponsors key={index} sponsor={item} type="silver" />
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
