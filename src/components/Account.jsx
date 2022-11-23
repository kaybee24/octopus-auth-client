import React from 'react'

const Account = ({ handleLogout, user }) => {
    var myDate = new Date();
    var hours = myDate.getHours();
    var greet;

    if (hours < 12)
        greet = "morning";
    else if (hours >= 12 && hours <= 17)
        greet = "afternoon";
    else if (hours >= 17 && hours <= 24)
        greet = "evening";
    return (
        <div className="w-full px-4 text-darkgrey-900">
            <div className="py-6">
                <h1 className="text-4xl font-paytoneOne uppercase">{`Good ${greet} ${user.name}`}</h1>
                <button className='bg-off-white-500 border border-coral-500 hover:bg-coral-900 py-3 px-8 my-6 rounded font-OpenSans' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Account