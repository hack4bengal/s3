import { useState } from "react";
import timelineData from "./TimelineData";
import "./Timeline.css";

const Timeline = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="headers-timeline_main">
      <div className="headers-timeline">
        <div className="row-one">
          <div className="headers">
            <div
              className={`boxed ${active === 0 ? "active-timelineOne" : ""}`}
              onClick={() => setActive(0)}
            >
              <div className="time-head">{timelineData[0].time}</div>
              <div className="desc-head">{timelineData[0].desc}</div>
            </div>
          </div>
          <div className={`${active === 0 ? "show-mob-time" : "hid-mob-time"}`}>
            <div
              className={`timeline-card timeline-card-mobile ${active === 0 ? "show-mob-time" : "hid-mob-time"
                }`}
            >
              <div className="timeline-card-header">
                <div className="col-1">{timelineData[0].date}</div>
                <div className="col-2">{timelineData[0].dateDesc}</div>
              </div>
              <div>
                <div className="timeline-card-body">
                  {timelineData[0].descInDepth}
                </div>
              </div>
            </div>
          </div>

          <div className="headers">
            <div
              className={`boxed ${active === 1 ? "active-timelineOne" : ""}`}
              onClick={() => setActive(1)}
            >
              <div className="time-head">{timelineData[1].time}</div>
              <div className="desc-head">{timelineData[1].desc}</div>
            </div>
          </div>
          <div className={`${active === 1 ? "show-mob-time" : "hid-mob-time"}`}>
            <div
              className={`timeline-card timeline-card-mobile ${active === 1 ? "show-mob-time" : "hid-mob-time"
                }`}
            >
              <div className="timeline-card-header">
                <div className="col-1">{timelineData[1].date}</div>
                <div className="col-2">{timelineData[1].dateDesc}</div>
              </div>
              <div>
                <div className="timeline-card-body">
                  {timelineData[1].descInDepth.split("\n").map((x) => (
                    <span>
                      {x}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="headers">
            <div
              className={`boxed ${active === 2 ? "active-timelineOne" : ""}`}
              onClick={() => setActive(2)}
            >
              <div className="time-head">{timelineData[2].time}</div>
              <div className="desc-head">{timelineData[2].desc}</div>
            </div>
          </div>
          <div className={`${active === 2 ? "show-mob-time" : "hid-mob-time"}`}>
            <div className="timeline-card timeline-card-mobile">
              <div className="timeline-card-header">
                <div className="col-1">{timelineData[2].date}</div>
                <div className="col-2">{timelineData[2].dateDesc}</div>
              </div>
              <div>
                <div className="timeline-card-body">
                  {timelineData[2].descInDepth}
                </div>
              </div>
            </div>
          </div>

          <div className="headers">
            <div
              className={`boxed ${active === 3 ? "active-timelineOne" : ""}`}
              onClick={() => setActive(3)}
            >
              <div className="time-head">{timelineData[3].time}</div>
              <div className="desc-head">{timelineData[3].desc}</div>
            </div>
          </div>
          <div className={`${active === 3 ? "show-mob-time" : "hid-mob-time"}`}>
            <div className="timeline-card timeline-card-mobile">
              <div className="timeline-card-header">
                <div className="col-1">{timelineData[3].date}</div>
                <div className="col-2">{timelineData[3].dateDesc}</div>
              </div>
              <div>
                <div className="timeline-card-body">
                  {timelineData[3].descInDepth}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-card timeline-card-xl">
          <div className="timeline-card-header">
            <div className="col-1">{timelineData[active].date}</div>
            <div className="col-2">{timelineData[active].dateDesc}</div>
          </div>
          <div>
            <div className="timeline-card-body">
              {timelineData[active].descInDepth.split("\n").map((x) => (
                <span>
                  {x}
                  <br />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline