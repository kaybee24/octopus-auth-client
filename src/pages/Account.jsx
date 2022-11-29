import React from 'react';
import NewPost from '../components/NewPost';

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
        <div className="w-full px-4 text-darkgrey-900">
            <div className="py-6">
                <h1 className="text-4xl font-paytoneOne uppercase">{`Good ${greet} ${user.name}`}</h1>
                <NewPost />
                <button className='bg-off-white-500 border border-coral-500 hover:bg-coral-900 py-3 px-8 my-6 rounded font-OpenSans' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Account