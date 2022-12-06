import { useEffect, useState } from "react";
import ScrollToTop from "./scrollToTop";

export default function FeedEvents({ user }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        if (user) {
            // console.log("user is available, getting messages..");
            // send fetch request with cookies
            fetch(import.meta.env.VITE_EVT_API, {
                mode: "cors",
                credentials: "include",
            })
                .then((res) => res.json())
                .then((events) => {
                    setEvents(events.data);
                    // console.log(messages)
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    return (
        <div className="ccontainer w-full max-w-7xl px-4 mt-6 text-offwhite-900">
            <ScrollToTop smooth/>
            {events.slice(0).reverse().map((event) => (
                <div key={event._id} className="relative max-w-[70rem] bg-ocean-800 px-3 py-5 my-4 rounded">
                    <p>
                        {event.title}
                        <br />
                        {event.message}
                        <br />
                        {event.city}
                        <br />
                        {event.location}
                        <br />
                        {event.eventDateTime}
                    </p>
                </div>
            ))}
        </div>
    );
}
