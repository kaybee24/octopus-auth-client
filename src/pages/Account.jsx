import React from 'react';
import { Link } from 'react-router-dom';

const Account = ({ handleLogout, user }) => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let greet;

    if (hours < 12)
        greet = "morning";
    else if (hours >= 12 && hours <= 17)
        greet = "afternoon";
    else if (hours >= 17 && hours <= 24)
        greet = "evening";
    if (!user) return <h1>loading</h1>
    return (
        <div className="container max-w-7xl px-4 mt-6 text-offwhite-900">
            <h1 className="text-4xl font-paytoneOne uppercase">{`Good ${greet} ${user.name}`}</h1>
            <div className='grid md:flex md:space-x-6'>
                <Link to="/my-feed"><button className='bg-coral-500 hover:bg-coral-900 h-[10rem] w-[29rem] md:w-[38rem] my-6 rounded font-OpenSans text-darkgrey-900'>Create a New Post</button></Link>
                <Link to="/new-event"><button className='bg-coral-500 hover:bg-coral-900 h-[10rem] w-[29rem] md:w-[38rem] my-6 rounded font-OpenSans text-darkgrey-900'>Create a New Event</button></Link>
            </div>
            <div className="grid">
                <button className='bg-off-white-500 border border-coral-500 hover:bg-coral-900 w-[15rem] py-3 px-8 my-2 rounded font-OpenSans' onClick={handleLogout}>Logout</button>
                <button className='bg-off-white-500 border border-coral-500 hover:bg-coral-900 w-[15rem] py-3 px-8 my-2 rounded font-OpenSans'>Delete Account</button>
            </div>
        </div>
    )
}

export default Account