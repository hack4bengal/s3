import React from "react";
import { useState, useEffect } from "react";

import "./Section8.css";

import problems from "../../assets/data/problemsData.js";
import ProblemCard from "../../components/problemCard/ProblemCard";
import { motion } from "framer-motion";

const initialProblem = 2;

const Section8 = () => {
  const useFade = (initial) => {
    const [show, setShow] = useState(initial);
    const [isVisible, setVisible] = useState(show);
    useEffect(() => {
      if (show) setVisible(true);
    }, [show]);
    const onAnimationEnd = () => {
      if (!show) setVisible(false);
    };

    const style = {
      animation: `${
        show ? "fadeIn 1.5s ease-in-out" : "fadeOut 0.5s ease-in-out"
      }`,
    };
    const fadeProps = {
      style,
      onAnimationEnd,
    };
    return [isVisible, setShow, fadeProps];
  };
  const [isVisible, setVisible, fadeProps] = useFade(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="hack4bengal__section8"
      id="problems"
    >
      <div className="hack4bengal__section8-body">
        <div className="hack4bengal__section8-title">Problem Statements</div>
        <div className="hack4bengal__section8-problems">
          <div className="hack4bengal__section8-problems-container1">
            {problems.slice(0, initialProblem).map((problem, index) => (
              <ProblemCard
                key={index}
                img={problem.img}
                title={problem.title}
                statement={problem.statement}
              />
            ))}
          </div>
          {isVisible && (
            <div
              className="hack4bengal__section8-problems-container2"
              {...fadeProps}
            >
              {problems
                .slice(initialProblem, problems.length)
                .map((problem, index) => (
                  <ProblemCard
                    key={index}
                    img={problem.img}
                    title={problem.title}
                    statement={problem.statement}
                  />
                ))}
            </div>
          )}
        </div>
        <button
          className="hack4bengal__section8-button"
          onClick={() => setVisible(!isVisible)}
        >
          {isVisible === false ? "Load More" : "Show Less"}
        </button>
      </div>
    </motion.div>
  );
};

export default Section8;
