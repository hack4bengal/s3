import HeaderData from "../../assets/data/HeaderContent";
import teamContent from "../../assets/data/TeamContent";
import { TeamCard } from "../../components/private";
import { Header } from "../../components/shared";
import "./Team.scss";

const Team = ({ refs }) => {
  return (
    <div className="team__container" ref={refs}>
      {/* ORGS */}
      <section className="org_section">
        <Header {...HeaderData.team} />

        <div className="org_cards org_cards_1">
          {teamContent.organizers
            .slice(0, 3)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((organizer, index) => {
              return (
                <TeamCard
                  key={index}
                  img={organizer.img}
                  name={organizer.name}
                  title={organizer.title}
                  linkedIn={organizer.linkedIn}
                  twitter={organizer.twitter}
                  linkedInIcon={teamContent.linkedInIcon}
                  twitterIcon={teamContent.twitterIcon}
                />
              );
            })}
        </div>
        <div className="org_cards org_cards_2">
          {teamContent.organizers
            .slice(3)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((organizer, index) => {
              return (
                <TeamCard
                  key={index}
                  img={organizer.img}
                  name={organizer.name}
                  title={organizer.title}
                  linkedIn={organizer.linkedIn}
                  twitter={organizer.twitter}
                  linkedInIcon={teamContent.linkedInIcon}
                  twitterIcon={teamContent.twitterIcon}
                />
              );
            })}
        </div>
      </section>

      {/* CORE */}

      <section className="core_section">
        <Header {...HeaderData.core} />

        <div className="core_cards">
          {teamContent.core
            .slice(4)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((organizer, index) => {
              return (
                <TeamCard
                  key={index}
                  img={organizer.img}
                  name={organizer.name}
                  title={organizer.title}
                  linkedIn={organizer.linkedIn}
                  twitter={organizer.twitter}
                  linkedInIcon={teamContent.linkedInIcon}
                  twitterIcon={teamContent.twitterIcon}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default Team;
