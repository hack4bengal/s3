import React from "react";
import sponsors from "../../assets/data/SponsorsContent";
import SingleSponsors from "../singlesponsors/SingleSponsors";
import "./Sponsors.scss";

const Sponsors = ({ refs }) => {
  return (
    <>
      <div className="sponsors__parent" ref={refs}>
        <div className="sponsors__header">
          <h1>{window.innerWidth > 700 ? "Supporters" : "Backers"}</h1>
          <h2>Past Sponsors</h2>
        </div>

        {/* <ComingSoon /> */}
        <div className="sponsors__flexbox">
          {sponsors.map((item, index) => {
            return <SingleSponsors key={index} sponsor={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
