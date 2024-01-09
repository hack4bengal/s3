import React from "react";
import { Link } from "react-router-dom";
import footerContent from "../../../assets/data/FooterContent";
import h4b from "../../../assets/images/FooterImages/hack4bengalbrand.webp";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content__top">
          <div className="footer__content__top__socials">
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
          <img src={h4b} alt="A black and white logo representing Hack4Bengal" />
        </div>
        <div className="footer__content__bottom">
          <div className="footer__content__bottom__links">
            {footerContent.links.map((link, index) => (
              <Link
                key={index}
                className="footer__content__bottom__link"
                to={link?.link}
              >
                {link?.text}
              </Link>
            ))}
            <div className="footer__content__bottom__mailhead">
              {footerContent.mail.text}
            </div>
            <a
              href={`mailto:${footerContent.mail.address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__content__bottom__mail"
            >
            Email us: {footerContent.mail.address}
            </a>

          </div>

          <div
            className="foooter__backtotop"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <p>Back to top</p>
            <svg
              fill="#ff1717"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              style={{ marginLeft: "6px", transform: "translateX(2px)" }}
            >
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </div>

          <div className="footer__prev_season">
            <Link
              to={"https://s1.hack4bengal.tech"}
              className="footer__content__bottom__prevseason"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Season 1
            </Link>
            <Link
              to={footerContent.prevSeason.url}
              className="footer__content__bottom__prevseason"
              target="_blank"
              rel="noopener noreferrer"
            >
              {footerContent.prevSeason.text}
            </Link>
          </div>
        </div>
      </div>
      <span className="footer__bg_overlay" />
      <div className="footer__bg">
        <img
          className="footer_image"
          src="https://www.hack4bengal.tech/assets/footer_bg-5b4bb7e1.svg"
          alt="footer_bg"
        />
        <span className="footer__bg__left" />
        <span className="footer__bg__right" />
      </div>
    </footer>
  );
};

export default Footer;
