import React from "react";
import EventCard from "../../components/EventCard";
import './style.css'

function Events() {
  return (
    <div className="container">
      <h2 className="upcomingEvents">Upcoming Events</h2>
      <div className="eventsDiv">
        <EventCard bookableEvent="true" eventDate="11 May 2023" eventTime="18:30 - 19:30" eventLocation="Blackwell's, 48-51 Broad Street, Oxford" eventTitle="Jonny Steinberg 'Winnie & Nelson' with Elleke Boehmer" eventLink="https://www.eventbrite.co.uk/e/jonny-steinberg-winnie-nelson-with-elleke-boehmer-tickets-592844603167" />
        <EventCard bookableEvent="true" eventDate="19 May 2023" eventTime="14:30 - 15:30" eventLocation="Franschoek Literary Festival, NG Church" eventTitle="Prisoners of Love: Jonny speaks to Hlonipha Mokoena " eventLink="https://www.flf.co.za/events/prisoners-of-love/" />
        <EventCard bookableEvent="true" eventDate="21 May 2023" eventTime="10:00 - 11:00" eventLocation="Franschoek Literary Festival, New School Hall " eventTitle="Prisoners of Love: Jonny speaks to Joanne Joseph " eventLink="https://www.flf.co.za/events/prisoners-of-love-2/" />
        <EventCard bookableEvent="false" eventDate="22 May 2023" eventTime="12:30 - 14:30" eventLocation="Cape Town Press Club with Marina Cantacuzino" eventTitle="The Mandela Family and the Concept of Forgiveness" eventLink="#" />
        <EventCard bookableEvent="true" eventDate="22 May 2023" eventTime="17:30 for 18:00" eventLocation="The Book Lounge launch, 71 Roeland Street, Cape Town " eventTitle="Jonny interviewed by Africa Melane" eventLink="https://booklounge.co.za/event/winnie-nelson-portrait-of-a-marriage/" />
        <EventCard bookableEvent="true" eventDate="23 May 2023" eventTime="17:30 for 18:00" eventLocation="WISER at Wits, Seminar Room on East Campus, University of the Witwatersrand " eventTitle="Jonny interviewed by Sizwe Mpofu-Walsh" eventLink="https://wiser.wits.ac.za/event/book-discussion-winnie-nelson-portrait-marriage-jonny-steinberg-23-may-6pm-person" />
        <EventCard bookableEvent="false" eventDate="24 May 2023" eventTime="17:30 for 18:00" eventLocation="Love Books launch, The Bamboo Lifestyle Centre, 53 Rustenburg Road, Melville, Johannesburg" eventTitle="Jonny interviewed by Eusebius McKaiser" eventLink="#" />
        <EventCard bookableEvent="false" eventDate="25 May 2023" eventTime="18:00 for 18:30" eventLocation="Johannesburg Holocaust & Genocide Centre, 1 Duncombe Road, Forest Town, Johannesburg " eventTitle="Jonny interviewed by Hlonipha Mokoena" eventLink="#" />
        <EventCard bookableEvent="true" eventDate="27 May 2023" eventTime="11:00 - 12:00" eventLocation="Kingsmead Book Fair " eventTitle="Interrogating Our Struggle Credentials: Jonnyand others talk to Siphiwo Mahala" eventLink="https://kingsmead.co.za/bookfair/adult-programme-2023/" />
        <EventCard bookableEvent="false" eventDate="28 May 2023" eventTime="10:00 - 10:30" eventLocation="Rabbi Cyril Harris Community Centre" eventTitle="Jonny interviewed by Hamilton Wende" eventLink="#" />
      </div>
    </div>
  )
}

export default Events;