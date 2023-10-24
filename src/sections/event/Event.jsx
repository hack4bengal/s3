
import React from "react";
import "./Event.css";

const Prize = () => {

    const [active, setActive] = React.useState(0);
    return <>
        <div className="event_mainparent">
            <p>Upcoming Events</p>
            <hr />


            <div className="event_subparent">

                <div className="events_dateparent">

                    <div className="events_date date1" onClick={() => {
                        setActive(0)
                    }}>
                        <p> 20th Feb</p>
                        {active === 0 && <hr style={{ width: "50%", marginTop: "5px" }} />}
                    </div>

                    <div className="events_date date2" onClick={() => {
                        setActive(1)
                    }}>
                        <p> 21st Feb</p>
                        {active === 1 && <hr style={{ width: "50%", marginTop: "5px" }} />}
                    </div>

                    <div className="events_date date3" onClick={() => {
                        setActive(2)
                    }}>
                        <p> 22nd Feb</p>
                        {active === 2 && <hr style={{ width: "50%", marginTop: "5px" }} />}
                    </div>
                </div>


                <div className="event_detailsparent">

                    {active === 0 && <>
                        <div className="event_eventcard">

                            <div className="eventcard_leftdiv">
                                <img src="https://h4b.vercel.app/static/media/team-1.6f107ad07e02eca9b80b.png" alt="h4b" />
                            </div>

                            <div className="eventcard_rightdiv">
                                <h1><span>"All about hackathons"</span> by Manish Kr Barnwal</h1>
                                <i>SDE @GitHub, GSOC God, H4B God</i>
                                <p className="eventcard_time">6:30 pm | Online</p>
                                <p className="eventcard_desc">An interactive session about Hackathons, Hack4bengal and more.</p>
                            </div>
                        </div>
                        <div className="event_eventcard">

                            <div className="eventcard_leftdiv">
                                <img src="https://h4b.vercel.app/static/media/team-1.6f107ad07e02eca9b80b.png" alt="h4b" />
                            </div>

                            <div className="eventcard_rightdiv">
                                <h1><span>"All about hackathons"</span> by Manish Kr Barnwal</h1>
                                <i>SDE @GitHub, GSOC God, H4B God</i>
                                <p className="eventcard_time">6:30 pm | Online</p>
                                <p className="eventcard_desc">An interactive session about Hackathons, Hack4bengal and more.</p>
                            </div>
                        </div>
                        <div className="event_eventcard">

                            <div className="eventcard_leftdiv">
                                <img src="https://h4b.vercel.app/static/media/team-1.6f107ad07e02eca9b80b.png" alt="h4b" />
                            </div>

                            <div className="eventcard_rightdiv">
                                <h1><span>"All about hackathons"</span> by Manish Kr Barnwal</h1>
                                <i>SDE @GitHub, GSOC God, H4B God</i>
                                <p className="eventcard_time">6:30 pm | Online</p>
                                <p className="eventcard_desc">An interactive session about Hackathons, Hack4bengal and more.</p>
                            </div>
                        </div>

                    </>}



                    {active === 1 && <>
                        <div className="event_eventcard">

                            <div className="eventcard_leftdiv">
                                <img src="https://h4b.vercel.app/static/media/team-2.7aff1325763731dae1c3.png" alt="h4b" />
                            </div>

                            <div className="eventcard_rightdiv">
                                <h1><span>"All about ML"</span> by Sagnik Mitra</h1>
                                <i>SDE @Odessa, Alot</i>
                                <p className="eventcard_time">6:30 pm | Online</p>
                                <p className="eventcard_desc">An interactive session about the world of Machine learning and more.</p>
                            </div>
                        </div>
                        <div className="event_eventcard">

                            <div className="eventcard_leftdiv">
                                <img src="https://h4b.vercel.app/static/media/team-2.7aff1325763731dae1c3.png" alt="h4b" />
                            </div>

                            <div className="eventcard_rightdiv">
                                <h1><span>"All about ML"</span> by Sagnik Mitra</h1>
                                <i>SDE @Odessa, Alot</i>
                                <p className="eventcard_time">6:30 pm | Online</p>
                                <p className="eventcard_desc">An interactive session about the world of Machine learning and more.</p>
                            </div>
                        </div>
                        <div className="event_eventcard">

                            <div className="eventcard_leftdiv">
                                <img src="https://h4b.vercel.app/static/media/team-2.7aff1325763731dae1c3.png" alt="h4b" />
                            </div>

                            <div className="eventcard_rightdiv">
                                <h1><span>"All about ML"</span> by Sagnik Mitra</h1>
                                <i>SDE @Odessa, Alot</i>
                                <p className="eventcard_time">6:30 pm | Online</p>
                                <p className="eventcard_desc">An interactive session about the world of Machine learning and more.</p>
                            </div>
                        </div>


                    </>}
                </div>

            </div>

        </div>

    </>;
};

export default Prize;
