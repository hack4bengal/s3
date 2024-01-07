import React from "react";
import sponsors from "../../../assets/data/SponsorsContent";
import { Header } from "../../shared";
import "./Sponsors.scss";
import SingleSponsors from "./singlesponsors/SingleSponsors";

const Sponsors = ({ refs }) => {
  return (
    <>
      <div className="sponsors__parent" ref={refs}>
        <Header
          backWord={"Supporters"}
          backWordMobile={"Backers"}
          frontWord={"Past Sponsor"}
        />

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
