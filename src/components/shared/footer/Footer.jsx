import React, { useState } from "react";
import footerContent from "../../../assets/data/FooterContent";
import gradient from "../../../assets/images/FooterImages/gradient.png";
import h4b from "../../../assets/images/FooterImages/hack4bengalbrand.webp";
import taxi from "../../../assets/images/FooterImages/taxi.png";
import tram from "../../../assets/images/FooterImages/tram.png";
import "./Footer.scss";

const Footer = () => {
  const [hover, setHover] = useState({
    applyCss: false,
    showText: false,
  });

  return (
    <footer className="footer">
      <div>
        <div className="footer_flexdiv">
          <img src={h4b} alt="" className="h4b_logo" />
          <img src={h4b} alt="" className="opacity-0 h4b_logo_2" />
        </div>
        <div className="footer_flexdiv">
          <div className="footer_content">
            <div className="footer_policy">
              <p>Brand Assets</p>
              <p>Code Of Conduct</p>
            </div>

            <div className="footer_email">
              <p>Email Us for more details</p>
              <a href="mailto:hack4bengal@gmail.com">hack4bengal@gmail.com</a>
            </div>
          </div>

          <div className="footer_socials">
            {footerContent.socials.map((social, index) => (
              <a
                key={index}
                href={social?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="disable-select"
              >
                <img src={social?.icon} alt={social?.name} />
              </a>
            ))}
          </div>
        </div>

        <img src={gradient} alt="" className="footer_gradient" />
        <img src={tram} alt="" className="footer_tram" />
      </div>

      <div
        className={`footer_previousSeasons ${
          hover.applyCss ? "move-taxi" : ""
        }`}
        onMouseEnter={() => {
          setHover({
            applyCss: true,
            showText: false,
          });

          setTimeout(() => {
            setHover({
              applyCss: true,
              showText: true,
            });
          }, 850);
        }}
        onMouseLeave={() => {
          setHover({
            applyCss: false,
            showText: false,
          });

          setTimeout(() => {
            setHover({
              applyCss: false,
              showText: false,
            });
          }, 850);
        }}
      >
        <img src={taxi} alt="Taxi" className={hover.showText ? "hidden" : ""} />
        <div className="text-container">
          <p className={hover.showText ? "hidden" : ""}>
            Checkout our Previous Seasons
          </p>
          <a className={hover.showText ? "footer__previous__season__link" : "hidden"} href="https://s1.hack4bengal.tech/" >Season 1</a>
          <a className={hover.showText ? "footer__previous__season__link" : "hidden"} href="https://s2.hack4bengal.tech/" >Season 2</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
