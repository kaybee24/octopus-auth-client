import React from "react";
import { useCallback } from "react";

const NewEvent = ({events, setEvents}) => {
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        var object = {};
        data.forEach(function (value, key) {
            object[key] = value;
        });

        fetch(import.meta.env.VITE_EVT_API, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(object),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    console.log(data);
                    setEvents(p=>[...p, data.newEvent])
                } else {
                    alert(data.message);
                }
            });
    }, []);

    return (
        <div className="container w-full max-w-7xl px-4 mt-6">
            <h2 className='text-4xl uppercase font-paytoneOne text-offwhite-900'>
                What is happening in your area?
            </h2>
            <form 
                className="w-full flex flex-col py-4 font-openSans" 
                onSubmit={handleSubmit}>
                <input
                    className="p-5 my-2 bg-grey-100 outline-ocean-700 max-w-[70rem]"
                    name="title"
                    type="text"
                    placeholder="Event title" />
                <textarea 
                    className="p-5 my-2 bg-grey-100 outline-ocean-700 max-w-[70rem]" 
                    name="message" 
                    type="text" 
                    placeholder="What is your event about?" 
                    rows="4"></textarea>
                <input
                    className="p-5 my-2 bg-grey-100 outline-ocean-700 max-w-[70rem]"
                    name="city"
                    type="text"
                    placeholder="City" />
                <input
                    className="p-5 my-2 bg-grey-100 outline-ocean-700 max-w-[70rem]"
                    name="location"
                    type="text"
                    placeholder="Location" />

                <input
                    className="p-5 my-2 bg-grey-100 outline-ocean-700 max-w-[70rem]"
                    name="eventDateTime"
                    type="datetime-local"
                    value="2022-11-30T18:00"
                    min="2022-11-30T18:00"
                    max="2025-11-30T18:00" />
                <button className='bg-coral-500 hover:bg-coral-900 max-w-xs py-3 my-6 rounded font-OpenSans font-bold'>Create New Event</button>
            </form>
        </div>
    );
}

export default NewEvent