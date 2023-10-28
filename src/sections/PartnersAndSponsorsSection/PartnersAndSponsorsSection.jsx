import React from "react";
import sponsors from "../../assets/data/PastSponsors";
import "./PartnersAndSponsorsSection.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { sliderSettings } from "../../motionUtils";

const PartnersAndSponsorsSection = () => {
  sponsors.map((sponsor)=>{
    console.log(!sponsor.id);
  })
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        viewport={{ once: false }}
        className="hack4bengal__section6"
        id="sponsors"
      >
        <div
          className="hack4bengal__section6-body"
          style={{ maxWidth: "100%" }}
        >
          <div className="hack4bengal__section6-title">
            Past Sponsors
          </div>
          <hr />
          <div className="sponsors-img">
            <Slider {...sliderSettings} className="slider">
            {sponsors.map((sponsor)=>(
                <div className="img-container">
                  <a href={sponsor.link} key={sponsor.img} className={!sponsor.id?`rectangle-img-padding`:`square-img-padding`}>
                      <img src={sponsor.img} alt={sponsor.alt} className={sponsor.id?`${sponsor.id === "foss"?`foss`:`square-img`}`:`rectangle-img`}/>
                  </a>
                </div>
                ))}
            </Slider>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PartnersAndSponsorsSection;
