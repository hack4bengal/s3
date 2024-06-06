import React from "react";
import HeaderData from "../../../assets/data/HeaderContent";
import { ComingSoon, Header } from "../../shared";
import "./Venue.scss";
import first from "../../../assets/images/PrizesImages/first.png";
import second from "../../../assets/images/PrizesImages/second.png";
import third from "../../../assets/images/PrizesImages/third.png";
import agun from "../../../assets/images/PrizesImages/agun.png";

const Venue = () => {
  return (
    <>
      <div className="venue_parent" id="venue">
        <Header {...HeaderData.venue} />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.7460955134566!2d88.4451770749888!3d22.959576179217947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027730302f6e25%3A0xe50dfccae21e1fc!2sJIS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1717677449166!5m2!1sen!2sin"
          referrerPolicy="no-referrer-when-downgrade"
          width={window.innerWidth < 600 ? "300" : "600"}
          height={window.innerWidth < 600 ? "300" : "300"}
        ></iframe>

        <p className="location_header">
          {" "}
          JIS College of Engineering Barrackpore
        </p>
        <p className="location_subheader">
          Kalyani Expy, Block A5, Block A, Kalyani, West Bengal 741235, India
        </p>
      </div>
    </>
  );
};

export default Venue;
