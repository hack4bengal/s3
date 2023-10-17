import React from "react";
import { useEffect } from "react";

import "./WordGlobe.css";

import TagCloud from "@frank-mayer/react-tag-cloud";

const WordGlobe = () => {
  return (
    <>
      <div className="text-sphere">
        <span className="tagcloud">
          <TagCloud
            options={(w: Window & typeof globalThis): TagCloudOptions => ({
              radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
              maxSpeed: "fast",
            })}
          >
            {[
              "20+ Sponsers",
              "45 Community partners",
              "85 Events",
              "10+ Speakers",
              "Unlimited Fun",
              "Amazing projects",
              "Django",
              "SQL",
              "ExpressJs",
              "Figma",
              "CodeEase",
              "The best Hackathon",
              "Quiz",
            ]}
          </TagCloud>
        </span>
      </div>
    </>
  );
};

export default WordGlobe;
