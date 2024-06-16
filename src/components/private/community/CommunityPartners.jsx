import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import sponsors from "../../../assets/data/SponsorsContent";
import { Header } from "../../shared";
import Marquee from "react-fast-marquee";
import SingleSponsors from "../sponsors/singlesponsors/SingleSponsors";

const CommunityPartners = () => {
  return (
    <>
      <div className="sponsors__parent" id="sponsors">
        <Header {...HeaderData.cp} />

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
                {sponsors["Community"].slice(0, 6)?.map((item, index) => {
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
                {sponsors["Community"].slice(6)?.map((item, index) => {
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

export default CommunityPartners;
