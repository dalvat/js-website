import React from "react";
import "./style.css";

export default function EventCard( {bookableEvent, eventDate, eventTime, eventTitle, eventLink, eventLocation} ) {

  if(bookableEvent === "true") {

    return (
      <div className="eventCard" id={eventDate}>
      <h3 className="eventTitle">{eventTitle}</h3>
      <div className="eventDetails">
        <p>{eventDate}</p>
        <p>{eventTime}</p>
        <p>{eventLocation}</p>
      </div>
      <a href={eventLink} target="_blank" rel="noreferrer"><button className="eventLink">Book Now</button></a>
    </div>
    )

  } else {

    return (
      <div className="eventCard" id={eventDate}>
      <h3 className="eventTitle">{eventTitle}</h3>
      <div className="eventDetails">
        <p>{eventDate}</p>
        <p>{eventTime}</p>
        <p>{eventLocation}</p>
      </div>
    </div>
    )

  }
}