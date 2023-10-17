import React from 'react'
import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import './ProblemCard.css'
import cross from '../../assets/images/cross.png'

const ProblemCard = ({img,title,statement}) => {

  const [modal, setModal] = useState(false);
  const [problem, setProblem] = useState([]);

  const getProblem = (img, title, statement) => {
    let temp = [img, title, statement]
    setProblem(item => [1, ...temp])
    return setModal(true)
  }

  document.body.style.overflow = !modal ? 'visible' : 'hidden';

  return (
    <div>
      <div className="hack4bengal__section8-card">
        <img
          className="hack4bengal__section8-image"
          src={img}
          onClick={() => getProblem(img, title, statement)}
          alt="h4b"
        ></img>
        <div className="hack4bengal__section8-cardtitle">{title}</div>
        <div className="hack4bengal__section8-line"></div>
        <div className="hack4bengal__section8-carddetails">{statement}</div>
      </div>

      {/* modal */}

      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ scaleX: 0, scaleY: 0.01 }}
            animate={{ scaleX: [0, 1, 1], scaleY: [0.005, 0.005, 1] }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            exit={{ scaleX: [1, 1, 0], scaleY: [1, 0.005, 0.005] }}
            className="hack4bengal__section8-problemModal-body"
          >
            <img
              className="problemModal-close"
              src={cross}
              onClick={() => setModal(false)}
            />
            <h1>{title}</h1>
            <p>{statement}</p>
            <img src={img} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProblemCard