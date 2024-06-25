import React from "react";
import "./NotFound.scss";
import "../../components/shared/button/Button.scss";
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pageNotFound__container">
      <div className="row">OMG</div>
      <div className="row">You broke the internet.</div>
      <div className="back_to_home_page_btn">
        <Link to={"/"} className="button outline">
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

// import React, {useState} from "react";
// import PropTypes from "prop-types";
// import {Link} from "react-router-dom";
// import DogeImage from "../../assets/images/404/doggo_img.webp";
// import ReversedDogeImage from "../../assets/images/404/reversed_doggo_img.webp";
// import petHimCircle from "../../assets/images/404/petHimCircle.svg";
// import "./Notfound.scss";
// import "../../components/shared/button/Button.scss";

// const Notfound = () => {
//   const [isReversed, setIsReversed] = useState(false);
//   const [circlePosition, setCirclePosition] = useState({x: 0, y: 0});
//   const [isHovering, setIsHovering] = useState(false);

//   const toggleImage = () => {
//     setIsReversed(!isReversed);
//   };

//   const handleMouseMove = (e) => {
//     if (isHovering) {
//       const rect = e.target.getBoundingClientRect();
//       setCirclePosition({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//     }
//   };

//   const handleMouseEnter = (e) => {
//     setIsHovering(true);
//     const rect = e.target.getBoundingClientRect();
//     setCirclePosition({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top,
//     });
//   };

//   const handleMouseLeave = () => {
//     setIsHovering(false);
//   };

//   return (
//     <div className="pageNotFound__container" id="pageNotFound">
//       <div className="pageNotFound__content">
//         <div className="pageNotFound__desc">
//           <h2>404!</h2>
//           <p>This page was not found, but you can stay here and pet our dogo</p>
//           <div className="back_to_home_page_btn">
//             <Link to={"/"} className="button outline">
//               Back to Homepage
//             </Link>
//           </div>
//         </div>
//         <div className="notfound__doge_container">
//           <div
//             className="doge__image"
//             onClick={toggleImage}
//             onMouseMove={handleMouseMove}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <img src={isReversed ? ReversedDogeImage : DogeImage} alt="Doge" />
//             {isHovering && (
//               <div
//                 className="notfound__petDogeCircle"
//                 style={{
//                   position: "absolute",
//                   top: `${circlePosition.y - 75}px`,
//                   left: `${circlePosition.x + 15}px`,
//                   pointerEvents: "none",
//                 }}
//               >
//                 <img src={petHimCircle} alt="Pet Him Circle" />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notfound;
