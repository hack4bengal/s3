import React from "react";
import "./TimelineSection.css";
import {motion} from "framer-motion";
import Timeline from "../../components/timeline/Timeline.jsx";

const TimelineSection = () => {
  return (
    <>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 1}}}
        viewport={{once: false}}
        className="hack4bengal__section2"
      >
        <div className="h4b_about_main">
          <div id="timeline">
            <div>
              <h1>Timeline</h1>
              <hr />
              <Timeline />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TimelineSection;
