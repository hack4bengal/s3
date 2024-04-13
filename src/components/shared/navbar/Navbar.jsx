/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import navbarContent from "../../../assets/data/NavbarContent";
import "./Navbar.scss";

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [isDropdownActive, setIsDropdownActive] = React.useState(false);

  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const navigate = useNavigate();

  const gotoElement = (el) => {
    setIsActive(false);

    if (el.startsWith("/")) {
      navigate(el);
      return;
    }

    // document
    //   .getElementById(el)
    //   .scrollIntoView({ behavior: "smooth" }, { block: "center" });

    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById(el)
          .scrollIntoView({ behavior: "smooth" }, { block: "center" });
      }, 500);
    } else {
      document
        .getElementById(el)
        .scrollIntoView({ behavior: "smooth" }, { block: "center" });
    }
  };

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsDropdownActive(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav className="navbar" ref={menuRef}>
      <Link to="/" className="navbar__logo_link">
        <img src={navbarContent.logo} alt="hack4bengal_logo" className="navbar__logo" />
      </Link>

      <ul>
        {navbarContent.links.map((link, index) => (
          <li
            key={index}
            onClick={() => {
              gotoElement(link?.link);
            }}
          >
            <p className="navbar__link">{link?.text}</p>
          </li>
        ))}
        <li>
        <div
          className="navbar__dropdown"
          onClick={() =>
            setIsDropdownActive((prevIsDropdownActive) => !prevIsDropdownActive)
          }
        >
          <span className="navbar__link">More</span>
          <ul
            className={`navbar__dropdown__items ${
              isDropdownActive ? "navbar__dropdown__items__active" : ""
            }`}
          >
            {navbarContent.dropdown.links.map((link, index) => (
              <li
                key={index}
                onClick={() => {
                  gotoElement(link?.link);
                }}
              >
                <p to={link?.link} className="navbar__dropdown__link">
                  {link?.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        </li>
        <svg className="navbar__dropdown__down__svg">
          <filter el="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </svg>
      </ul>
      <div className="navbar__mobile">
        <svg
          className={`navbar__mobile__ham navbar__mobile_ham__hamRotate ${
            isActive ? "navbar__mobile_ham__active" : ""
          } navbar__mobile_ham__ham1`}
          viewBox="0 0 100 100"
          width="70"
          onClick={handleClick}
        >
          <path
            className="navbar__mobile_ham__line navbar__mobile_ham__top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path
            className="navbar__mobile_ham__line navbar__mobile_ham__middle"
            d="m 30,47 h 40"
          />
          <path
            className="navbar__mobile_ham__line navbar__mobile_ham__bottom"
            d="m 30,61 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
        <div
          className={`navbar__mobile__menu ${
            isActive ? "" : "navbar__mobile__menu__hidden"
          }`}
        >
          <div
            className={`navbar__mobile__sidebar ${
              isActive ? "navbar__mobile__sidebar__active" : ""
            }`}
          >
            <div className="navbar__mobile__menu__h4b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="560"
                viewBox="0 0 2 560"
                fill="none"
              >
                <path d="M1 560L1 0" stroke="#FF1717" strokeWidth="2" />
              </svg>
              <ul>
                {navbarContent.links.map((link, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      gotoElement(link?.link);
                    }}
                  >
                    <Link to={link?.link} className="navbar__mobile__link">
                      {link?.text}
                    </Link>
                  </li>
                ))}
                {navbarContent.dropdown.links.map((link, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      gotoElement(link?.link);
                    }}
                  >
                    <Link to={link?.link} className="navbar__mobile__link">
                      {link?.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar__mobile__menu__h4b__logo" el="lmao">
              <span>Developed By</span>
              <img src={navbarContent.logo} alt="hack4bengal_logo" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
