import React, {useEffect} from "react";
import "./OfflineEventsSection.css";

import land1 from "../../assets/events/landscape/land1.png";
import land2 from "../../assets/events/landscape/land2.png";
import land3 from "../../assets/events/landscape/land3.png";
import land4 from "../../assets/events/landscape/land4.png";
import land5 from "../../assets/events/landscape/land5.png";

import ver1 from "../../assets/events/potrait/ver1.png";
import ver2 from "../../assets/events/potrait/ver2.png";
import ver3 from "../../assets/events/potrait/ver3.png";
import ver4 from "../../assets/events/potrait/ver4.png";
import ver5 from "../../assets/events/potrait/ver5.png";

function OfflineEventsSection() {
  /*   useEffect(() => {
      console.log(window.innerWidth);
    }, [window.innerWidth]); */

  return (
    <>
      <div className="offlineEventsSection_God">
        <div className="offlineEventsSection_Parent">
          <h1 className="offlineEventsSection_Title">Offline Events</h1>
          <hr style={{marginBottom: "70px"}} />

          <div className="eventsflex_maindiv">
            <div className="events_flexmain1 events_flexmain">
              <div className="events_flexcol">
                <img src={land1} alt="h4b" className="event_smallimg" />
                <p className="event_flextext">
                  2500+ <br /> <span className="event_flextext2">Hackers</span>
                </p>
              </div>

              <img src={ver1} alt="h4b" className="event_largeimg" />
            </div>

            <div className="events_flexmain2 events_flexmain">
              <img src={ver2} alt="h4b" className="event_largeimg" />

              <div className="events_flexcol">
                <p className="event_flextext">
                  50+ <br /> <span>Partners</span>
                </p>

                <img src={land2} alt="h4b" className="event_smallimg" />
              </div>
            </div>

            <div className="events_flexmain3 events_flexmain">
              <div className="events_flexcol">
                <img src={land3} alt="h4b" className="event_smallimg" />
                <p className="event_flextext">
                  85+ <br /> <span>H4B Events</span>
                </p>
              </div>

              <img src={ver3} alt="h4b" className="event_largeimg" />
            </div>

            <div className="events_flexmain4 events_flexmain">
              <img src={ver4} alt="h4b" className="event_largeimg" />

              <div className="events_flexcol">
                <p className="event_flextext">
                  220+ <br /> <span>Projects</span>
                </p>

                <img src={land4} alt="h4b" className="event_smallimg" />
              </div>
            </div>

            <div className="events_flexmain5 events_flexmain">
              <div className="events_flexcol">
                <img src={land5} alt="h4b" className="event_smallimg" />
                <p className="event_flextext">
                  36+ <br /> <span>Hack Hours</span>
                </p>
              </div>

              <img src={ver5} alt="h4b" className="event_largeimg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfflineEventsSection;
