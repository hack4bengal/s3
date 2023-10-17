import React from "react";
import "./Team.css";
import overAllCoordinaters from "../../assets/data/overAllCoordinatorsData";
import executives from "../../assets/data/executivesData";
import TeamCard from "../../components/teamCard/TeamCard";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="hack4bengal__team"
      id="speakers"
    >
      <div className="hack4bengal__team-body">
        <div className="hack4bengal__team-header-container"></div>
        <div className="hack4bengal__team-title">The Organizers </div>
        <hr />
        {window.innerWidth > 768 ? (
          <>
            <div className="hack4bengal__team-members">
              {overAllCoordinaters.slice(0, 3).map((member, index) => (
                <TeamCard
                  key={index}
                  img={member.Photo}
                  name={member.Name}
                  linkedin={member.linkedin}
                  position={member.position}
                  domain={member.Domain}
                />
              ))}
            </div>

            <div
              className="hack4bengal__team-members"
              style={{ marginTop: "2rem" }}
            >
              {overAllCoordinaters.slice(3, 5).map((member, index) => (
                <TeamCard
                  key={index}
                  img={member.Photo}
                  name={member.Name}
                  linkedin={member.linkedin}
                  position={member.position}
                  domain={member.Domain}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="hack4bengal__team-members">
            {overAllCoordinaters.map((member, index) => (
              <TeamCard
                key={index}
                img={member.Photo}
                name={member.Name}
                linkedin={member.linkedin}
                position={member.position}
                domain={member.Domain}
              />
            ))}
          </div>
        )}

        <div className="hack4bengal__team-title">The Soul and Heart of <br /> Hack4Bengal</div>
        <hr />
        <div className="hack4bengal__team-members">
          {overAllCoordinaters.slice(5).map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              linkedin={member.linkedin}
              position={member.position}
              domain={member.Domain}
            />
          ))}
        </div>
        {/* 
        <div className="hack4bengal__team-title">Leaders</div>
        <hr />
        <div className="hack4bengal_team-leaders">
          <div className="hack4bengal__team-members">
            {executives.slice(0, 9).map((member, index) => (
              <TeamCard
                key={index}
                img={member.Photo}
                name={member.Name}
                linkedin={member.linkedin}
                position={member.position}
                domain={member.Domain}
                idx={index}
              />
            ))}
          </div>
        </div>
        <div className="hack4bengal__team-title">Core Team</div>
        <hr />
        <div className="hack4bengal__team-members">
          {executives.slice(9).map((member, index) => (
            <TeamCard
              key={index}
              img={member.Photo}
              name={member.Name}
              linkedin={member.linkedin}
              position={member.position}
              domain={member.Domain}
            />
          ))}
        </div> */}
      </div>
    </motion.div>
  );
};

export default Team;
