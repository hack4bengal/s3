import React from "react";
import { useRef, useState } from "react";
import "./NavbarTeam.css";
import hack4bengal from "../../assets/img/Hack4Bengal.png";
import { motion } from "framer-motion";
import { headerVariants } from "../../motionUtils";
import { Link } from "react-router-dom";

const NavbarTeam = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburger = useRef(null);
  function toggleMenu() {
    setIsOpen(!isOpen);
    hamburger.current.classList.toggle("active");
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className="hack4bengal__navbarTeam-container"
    >
      <header className="hack4bengal__navbarTeam">
        <div className="hack4bengal__navbarTeam-body">
          <Link to={"/"}>
            <div className="hack4bengal__navbarTeam-logo">
              <img src={hack4bengal} alt="hack4bengal" />
            </div>
          </Link>

          <nav className="hack4bengal__navbarTeam-menu">
            <ul className="hack4bengal__navbarTeam-navlist">
              <li className="hack4bengal__navbarTeam-navitem">
                <Link to="/">
                  <h3 className="hack4bengal__navbarTeam-menu-heading">
                    Back To Main Page
                  </h3>
                </Link>
              </li>
            </ul>
          </nav>
          {/* <div className="hack4bengal__navbarTeam-logo hack4bengal__navbarTeam-brochure">
            <img src={tcp} />
            <button className="hack4bengal__navbarTeam-brochure-button">
              <img src={downArrow} />
              <a href={brochure} download="Brochure">
                BROCHURE
              </a>
            </button>
          </div> */}
        </div>
      </header>
      <header
        className={`hack4bengal__navbarTeam-hamburger ${
          isOpen ? `hamburger-open` : ``
        }`}
      >
        <div className="hack4bengal__navbarTeam-hamburger-body">
          <nav className="hack4bengal__navbarTeam-hamburger-nav">
            <div className="hamburger">
              <svg
                className="ham hamRotate ham8"
                viewBox="0 0 100 100"
                width="80"
                ref={hamburger}
                onClick={toggleMenu}
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                />
                <path className="line middle" d="m 30,50 h 40" />
                <path
                  className="line bottom"
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                />
              </svg>
            </div>
            <div className="hack4bengal__navbarTeam-hamburger-logo">
              <img src={hack4bengal} alt="hack4bengal" />
            </div>
            {/* <div className="hack4bengal__navbarTeam-hamburger-logo">
              <img src={tcp} alt="hack4bengal" />
            </div> */}
          </nav>
        </div>
        <ul
          className={`hack4bengal__navbarTeam-hamburger-navlist ${
            isOpen ? `activeMenu slide-bottom` : ``
          }`}
        >
          <li className="hack4bengal__navbarTeam-hamburger-navitem">
            <Link to="/#prizes" onClick={toggleMenu}>
              <h3 className="hack4bengal__navbarTeam-hamburger-menu-heading">
                Back To Home Page 2
              </h3>
            </Link>
          </li>
          {/* <button className="hack4bengal__navbarTeam-hamburger-brochure-button hack4bengal__navbarTeam-brochure-button">
            <img src={downArrow} />
            <a href={brochure} download="Brochure">
              Download Brochure
            </a>
          </button> */}
        </ul>
      </header>
    </motion.div>
  );
};

export default NavbarTeam;
