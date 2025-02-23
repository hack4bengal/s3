import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import { Header } from "../../shared";
import "./Venue.scss";

const Venue = () => {
  return (
    <>
      <div className="venue_parent" id="venue">
        <Header {...HeaderData.venue} />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0101050978833!2d88.47356327638298!3d22.578725379487313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027532681696e9%3A0xb8684bcdb918e91!2sSister%20Nivedita%20University%20(SNU)!5e0!3m2!1sen!2sin!4v1740321783043!5m2!1sen!2sin"
          referrerPolicy="no-referrer-when-downgrade"
          width={window.innerWidth < 600 ? "300" : "600"}
          height={window.innerWidth < 600 ? "300" : "300"}
        ></iframe>

        <p className="location_header">Sister Nivedita University (SNU)</p>
        <p className="location_subheader">
          DG Block(Newtown), Action Area I, 1/2, Newtown, New Town,
          Chakpachuria, West Bengal 700156
        </p>

        <div className="location__btn_div">
          {/* <div className="location_btn_div_mobile">
            <a
              href="https://www.jiscollege.ac.in/virtual-tour/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="location__btn">View in 360°</button>
            </a>

            <a
              href="https://hack4bengal.tech/guide"
              target="_blank"
              rel="noopener noreferrer"
              className="location_howtoreach_mobile"
            >
              <button className="location__btn">Event Guide</button>
            </a>
          </div> */}

          <a
            href="https://maps.app.goo.gl/QnPyG1FTEZ5jAFtS9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="location__btn">View in Google Maps</button>
          </a>
          {/* <a
            href="https://hack4bengal.tech/guide"
            target="_blank"
            rel="noopener noreferrer"
            className="location_howtoreach"
          >
            <button className="location__btn">Event Guide</button>
          </a> */}
        </div>
      </div>
    </>
  );
};

export default Venue;
