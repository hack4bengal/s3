import React from "react";

import Crying_Doge_Image from "../../assets/images/404/doggo.webp";
import {Button} from "../../components/shared";
import petHimCircle from "../../assets/images/404/petHimCircle.svg";

import "./Notfound.scss";

const Notfound = () => {
  return (
    <>
      <div className="pageNotFound__container" id="pageNotFound">
        <div className="pageNotFound__content">
          <div className="pageNotFound__desc">
            <h2>404!</h2>

            <p>
              This page was not found, but you can stay here and pet our dogo
            </p>

            <Button type="outline" to={"/"}>
              Back to Homepage
            </Button>

            <div className="notfound__petDogeCircle">
              <img src={petHimCircle} />
            </div>
          </div>

          <div className="notfound__doge_container">
            <div className="doge__image">
              <img src={Crying_Doge_Image} />
            </div>

            <div className="notfound__petDogeCircle_mobile">
              <img src={petHimCircle} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
