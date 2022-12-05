import { useEffect, useState } from "react";
import ScrollToTop from "./scrollToTop";
import Pagination from "./Pagination";

export default function FeedEvents({ user }) {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(0);
    const [hitsPerPage, setHitsPerPage] = useState(10);

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
        <div className="container w-full max-w-7xl px-4 mt-6 text-offwhite-900">
            <ScrollToTop smooth/>
            {events.slice(0).reverse().map((event) => (
                <div key={event._id} className="relative max-w-[70rem] bg-ocean-800 px-3 py-5 my-4 rounded">
                    <p className="my-8">
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
            <Pagination page={page} setPage={setPage} rangeLength={20} />
        </div>
    );
}
