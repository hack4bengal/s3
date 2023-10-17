import React, { Component } from "react";
import schedule from "../../assets/data/scheduledata";
import "./Schedulepage.css";
import Navbar from "../../components/navbar/Navbar";
export default class Schedulepage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div id="content">
          <div className="hack4bengal__team-title">Event Schedule</div>

          <ul class="timeline">
            {schedule.map((schedule, index) => (
              <li class="event" data-date={schedule.time}>
                <h3>{schedule.heading}</h3>
                <p className='mob-time'>{schedule.time}</p>
                <p>{schedule.Discription}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
