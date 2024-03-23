import teamContent from '../../assets/data/TeamContent';
import { useState, useEffect } from "react";
import './Team.scss';
import { TeamCard } from '../../components/private';


const Team = ({ refs }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="team__container" ref={refs}>
            <section className='team__organizers__container'>
                <div className="team__organizers__header disable-select">
                    <h2>{teamContent.title.organizers}</h2>
                </div>
                <div className="team__organizers__child__container">
                    {
                        teamContent.organizers.map(
                            (organizer, index) => {
                                return (
                                    <TeamCard key={index} img={organizer.img} imgAlt={organizer.imgAlt} name={organizer.name} title={organizer.title} linkedIn={organizer.linkedIn} twitter={organizer.twitter} linkedInIcon={teamContent.linkedInIcon} twitterIcon={teamContent.twitterIcon} />
                                )
                            }
                        )
                    }
                </div>
            </section>
            <section className='team__core__container'>
                <div className="team__core__header disable-select">
                <h1>{windowWidth > 1280 ? teamContent.title.core.back : ""}</h1>
                    <h2>{teamContent.title.core.main}</h2>
                </div>
                <div className="team__core__child__container">
                    {
                        teamContent.core.map(
                            (organizer, index) => {
                                return (
                                    <TeamCard key={index} img={organizer.img} imgAlt={organizer.imgAlt} name={organizer.name} title={organizer.title} linkedIn={organizer.linkedIn} twitter={organizer.twitter} linkedInIcon={teamContent.linkedInIcon} twitterIcon={teamContent.twitterIcon} />
                                )
                            }
                        )
                    }
                </div>
            </section>
        </div>
    )
}


export default Team;




