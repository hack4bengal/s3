import React from "react";

import "../../sections/PrizesSection/Section9.css";

const PrizeBox = ({title, cashPrize, prizeInfo}) => {
  return (
    <div className="hack4bengal__section9-box">
      <div className="hack4bengal__section9-boxtitle">{title}</div>
      <div className="hack4bengal__section9-boxInfo">
        <ul>
          {cashPrize.map((listElement, index) => (
            <li>
              <b>{listElement}</b>
            </li>
          ))}
          {prizeInfo.map((listElement, index) => (
            <li>{listElement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrizeBox;
