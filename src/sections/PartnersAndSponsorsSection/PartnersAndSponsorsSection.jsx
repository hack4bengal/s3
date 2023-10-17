import React from "react";
import sponsers from "../../assets/data/sponsersData";
import "./PartnersAndSponsorsSection.css";
import { motion } from "framer-motion";

import CommunityPartnersInfiniteCarousel from "../../components/CommunityPartnersInfiniteCarousel/CommunityPartnersInfiniteCarousel";
import { textAligns } from "dracula-ui";

const PartnersAndSponsorsSection = () => {
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
            Partners And Sponsors
          </div>
          <hr />
          <h3 style={{ textAlign: "center" }}>To be decided soon...</h3>
        </div>
      </motion.div>
    </>
  );
};

export default PartnersAndSponsorsSection;
