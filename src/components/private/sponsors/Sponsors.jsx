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

        <div className="sponsors__container">
          <div className="sponsors__flexbox">
            {sponsors.map((item, index) => {
              return <SingleSponsors key={index} sponsor={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
