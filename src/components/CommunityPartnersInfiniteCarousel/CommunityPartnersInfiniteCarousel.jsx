import React from "react";
import "./CommunityPartnersInfiniteCarousel.css";

import sponsers from "../../assets/data/sponsersData";

const CommunityPartnersInfiniteCarousel = () => {
  // create an array of image elements
  const partners = sponsers.communityPartners.map((partner, index) => (
    <a href={partner.link}>
      <img
        style={{
          // borderRadius: "20px",
          width: "200px",
          height: "100px",
          objectFit: "contain",
        }}
        key={index}
        src={partner.img}
        alt={partner.alt || ""}
      />
      <div style={{textAlign: "center"}}>
        <p style={{paddingTop: "2px"}}>
          {partner.txt.split("\n").map((line, index) => (
            <React.Fragment key={index}>{line}</React.Fragment>
          ))}
        </p>
      </div>
    </a>
  ));

  return (
    <>
      <div className="hack4bengal__section6_communityPartnerSection platinum">
        <div className="hack4bengal__section6_communityPartnerImages">
          {partners}
        </div>
      </div>
    </>
  );
};

export default CommunityPartnersInfiniteCarousel;
