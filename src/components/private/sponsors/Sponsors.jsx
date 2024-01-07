import React, { useEffect, useState } from "react";
import sponsors from "../../../assets/data/SponsorsContent";
import "./Sponsors.scss";
import SingleSponsors from "./singlesponsors/SingleSponsors";

const Sponsors = ({ refs }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="sponsors__parent" ref={refs}>
        <div className="sponsors__header disable-select">
          <h1>{windowWidth > 700 ? "Supporters" : "Backers"}</h1>
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
