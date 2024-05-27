import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Notfound.scss";
import doggoCryingImg from "../../assets/images/404/doggo.webp";
import doggoLaughingImg from "../../assets/images/404/doggo-showing-true-face.webp";
import { FaArrowRightLong } from "react-icons/fa6";


const Notfound = () => {
  const cursor = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }

  return (
    <>
      <div className="notfound__container" onMouseMove={changePosition}>
        <div className="notfound__content__container">
          <span className="notfound__title">404!</span>
          <p className="notfound__description">This page was not found, but you can stay here and pet our dogo</p>
          <Link to="/" className="notfound__homepage_link">Back to Homepage <FaArrowRightLong /> </Link>
        </div>
        <div className="notfound__img__container" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          {
            isHovering ?
              <img src={doggoLaughingImg} alt="Doggo showing true face" />
              :
              <img src={doggoCryingImg} alt="doggo crying" />
          }
        </div>
        <div ref={cursor} className="notfound__pet__cursor">
          <span>PET HIM</span>
        </div>
      </div>
    </>
  );
};

export default Notfound;
