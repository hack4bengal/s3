import React, { useEffect } from "react";
import { useRef, useState } from "react";
import "./Navbar.css";
import hack4bengal from "../../assets/images/navbar/h4blogo.png";

import { motion } from "framer-motion";
import { headerVariants } from "../../motionUtils";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./dropdown/Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburger = useRef(null);
  function toggleMenu() {
    setIsOpen(!isOpen);
    hamburger.current.classList.toggle("active");
  }
  const navigate = useNavigate();
  let element;

  const gotoId = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    } else {
      window.location.href = "#" + id;
    }
  };

  let menuRef = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        // console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className="hack4bengal__navbar-container"
    >
      <header className="hack4bengal__navbar ">
        <div className="hack4bengal__navbar-body" ref={menuRef}>
          <Link to={"/"}>
            <div className="hack4bengal__navbar-logo">
              <img src={hack4bengal} alt="logo" />
            </div>
          </Link>
          <nav className="hack4bengal__navbar-menu">
            <ul className="hack4bengal__navbar-navlist">
              <li className="hack4bengal__navbar-navitem">
                <p
                  /* href="#home" */
                  onClick={() => {
                    gotoId("home");
                    toggleMenu();
                  }}
                >
                  <h3 className="hack4bengal__navbar-menu-heading">Home</h3>
                </p>
              </li>
              <li className="hack4bengal__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("aboutus");
                    toggleMenu();
                  }}
                >
                  <h3 className="hack4bengal__navbar-menu-heading">About</h3>
                </p>
              </li>
              <li className="hack4bengal__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("venue");
                    toggleMenu();
                  }}
                >
                  <h3 className="hack4bengal__navbar-menu-heading">Venue</h3>
                </p>
              </li>
              <li className="hack4bengal__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("timeline");
                    toggleMenu();
                  }}
                >
                  <h3 className="hack4bengal__navbar-menu-heading">Timeline</h3>
                </p>
              </li>
              <li className="hack4bengal__navbar-navitem">
                <Link to={"/live"}>
                  <h3 className="hack4bengal__navbar-menu-heading">Live</h3>
                </Link>
              </li>

              <li className="hack4bengal__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("themes");
                    toggleMenu();
                  }}
                >
                  <h3 className="hack4bengal__navbar-menu-heading">Themes</h3>
                </p>
              </li>
              <li className="hack4bengal__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("prizes");
                    toggleMenu();
                  }}
                >
                  <h3 className="hack4bengal__navbar-menu-heading">Prizes</h3>
                </p>
              </li>

              <li className="hack4bengal__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("sponsors");
                    toggleMenu();
                  }}
                >
                  <h3 className="hack4bengal__navbar-menu-heading">Sponsors</h3>
                </p>
              </li>

              {/*  <li className="hack4bengal__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("speakers");
                    toggleMenu();
                  }}
                >
                  <h3 className="hack4bengal__navbar-menu-heading">Speakers</h3>
                </p>
              </li>

              <li className="hack4bengal__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("sponsers");
                    toggleMenu();
                  }}
                >
                  <h3 className="hack4bengal__navbar-menu-heading">Sponsors</h3>
                </p>
              </li>
              <li className="hack4bengal__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("faq");
                    toggleMenu();
                  }}
                >
                  <h3 className="hack4bengal__navbar-menu-heading">FAQ</h3>
                </p>
              </li>
              <li className="hack4bengal__navbar-navitem">
                <p
                  onClick={() => {
                    gotoId("team");
                    toggleMenu();
                  }}
                >
                  <h3 className="hack4bengal__navbar-menu-heading">Team</h3>
                </p>
              </li> */}
              <div style={{ position: "relative" }}>
                <li className="hack4bengal__navbar-navitem">
                  <p
                    onClick={() => {
                      //console.log("Hello mf");
                      setOpen(!open);
                    }}
                  >
                    <h3 className="hack4bengal__navbar-menu-heading">More</h3>
                  </p>
                </li>

                <Dropdown open={open} setOpen={setOpen} />
              </div>
            </ul>
          </nav>
        </div>
      </header>
      <header
        className={`hack4bengal__navbar-hamburger ${
          isOpen ? `hamburger-open` : ``
        }`}
      >
        <div className="hack4bengal__navbar-hamburger-body">
          <nav className="hack4bengal__navbar-hamburger-nav">
            <div className="hamburger">
              <svg
                className="ham hamRotate ham8"
                viewBox="0 0 100 100"
                width="80"
                ref={hamburger}
                onClick={() => {
                  // gotoId("aboutus");
                  toggleMenu();
                }}
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
            <div className="hack4bengal__navbar-hamburger-logo">
              <img src={hack4bengal} alt="logo" />
            </div>
            <div
              className="hack4bengal__navbar-hamburger-logo"
              style={{
                display: "none",
                transform: "scale(2)",
                marginTop: "40px",
              }}
            ></div>
          </nav>
        </div>
        <ul
          className={`hack4bengal__navbar-hamburger-navlist ${
            isOpen ? `activeMenu slide-bottom` : ``
          }`}
        >
          <li className="hack4bengal__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("home");
                toggleMenu();
              }}
            >
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Home
              </h3>
            </p>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("aboutus");
                toggleMenu();
              }}
            >
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                About Us
              </h3>
            </p>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("venue");
                toggleMenu();
              }}
            >
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Venue
              </h3>
            </p>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("timeline");
                toggleMenu();
              }}
            >
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Timeline
              </h3>
            </p>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <Link to={"/live"}>
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Live
              </h3>
            </Link>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("themes");
                toggleMenu();
              }}
            >
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Themes
              </h3>
            </p>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("prizes");
                toggleMenu();
              }}
            >
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Prizes
              </h3>
            </p>
          </li>

          <li className="hack4bengal__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("judges");
                toggleMenu();
              }}
            >
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Mentors
              </h3>
            </p>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <Link to={"/live"}>
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Live
              </h3>
            </Link>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("sponsors");
                toggleMenu();
              }}
            >
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Sponsors
              </h3>
            </p>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("team");
                toggleMenu();
              }}
            >
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                Team
              </h3>
            </p>
          </li>
          <li className="hack4bengal__navbar-hamburger-navitem">
            <p
              onClick={() => {
                gotoId("faq");
                toggleMenu();
              }}
            >
              <h3 className="hack4bengal__navbar-hamburger-menu-heading">
                FAQ
              </h3>
            </p>
          </li>
        </ul>
      </header>
    </motion.div>
  );
};

export default Navbar;
