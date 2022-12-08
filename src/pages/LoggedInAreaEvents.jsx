import React from "react";
import NewEvent from "../components/NewEvent.jsx";
import FeedEvents from "../components/FeedEvents.jsx";

export default function LoggedInAreaEvents({ user, events, setEvents }) {

    return (
        <>
            <main className="w-full px-4">
                <NewEvent events={events} setEvents={setEvents} />
                <FeedEvents user={user} events={events} setEvents={setEvents} />
            </main>
        </>
    );
}
