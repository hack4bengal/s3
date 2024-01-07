import React from "react";
import "./SingleSponsors.scss";

const SingleSponsors = ({ sponsor }) => {
  return (
    <>
      <div className="single__sponsor">
        <img src={sponsor?.img} alt="" />
      </div>
    </>
  );
};

export default SingleSponsors;
