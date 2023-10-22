import React from 'react';
import './ThemesSection.css';
import { motion } from 'framer-motion';

const ThemesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="hack4bengal__section5"
    >
      <div className="h4b_about_main">
        <div id="themes">
          <div>
            <h1>Themes</h1>
            <hr />
            <h3 style={{ textAlign: 'center' }}>To be decided soon...</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThemesSection;
