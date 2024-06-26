import React from 'react'
import { Events } from './Events'

import "./EventSection.scss";

const EventCard = ({ event }) => {
    return (
        <div className="card">
            {/* <img src={event.thumbnail} alt={event.name} className="card-img-top" /> */}
            <div className="card-body">
                <div className='card-details'>
                <h2 className="card-title">{event.name}</h2>
                {/* <p className="card-description">{event.description}</p> */}
                </div>
                <p className="card-text">
                    <small className="text-muted">{new Date(event.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(event.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
                    <small className="text-muted">{event.place}</small>
                </p>
            </div>
        </div>
    );
};

const EventSection = () => {
    const currentTime = new Date();

    // Sort events by time
    const sortedEvents = [...Events].sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

    // Determine the status of each event
    const eventsWithStatus = sortedEvents.map(event => {

        const startTime = new Date(event.startTime);
        const endTime = new Date(event.endTime);
        let status = '';

        if (currentTime >= startTime && currentTime <= endTime) {
            status = 'Live';
        } else if (currentTime < startTime) {
            status = 'Upcoming';
        } else {
            status = 'Past';
        }

        return { ...event, status };
    });

    // Separate live event and upcoming events
    const liveEvent = eventsWithStatus.find(event => event.status === 'Live');
    const upcomingEvents = eventsWithStatus.filter(event => event.status === 'Upcoming');

    return (
        <div className="event-list">
            <div className="live-event">
                <div className='badge-live'>
                    <span></span>
                    <h2>Live Event</h2>
                </div>
                {liveEvent && <EventCard event={liveEvent} />}
            </div>
            <div className="upcoming-events">
                <div className='badge-upcoming'>
                    <span></span>
                    <h2>Upcoming Event</h2>
                </div>
                {upcomingEvents && <EventCard event={upcomingEvents[0]} />}
                {/* {upcomingEvents.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))} */}
            </div>
        </div>
    );
};

export default EventSection