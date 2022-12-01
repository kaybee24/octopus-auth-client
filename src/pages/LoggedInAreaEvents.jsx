import React from "react";
import NewEvent from "../components/NewEvent.jsx";
import FeedEvents from "../components/FeedEvents.jsx";

export default function LoggedInAreaEvents({ user }) {

    return (
        <>
            <main className="w-full px-4">
                <NewEvent />
                <FeedEvents user={user} />
            </main>
        </>
    );
}
