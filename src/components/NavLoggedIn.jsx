import React from 'react'
import { Link } from 'react-router-dom'

const NavLoggedIn = () => {
    return (
        <nav>
            <ul className='flex justify-center font-openSans space-x-8'>
                <li><Link to="/">Home</Link></li>
                LOGGED IN
                <li><Link to="/my-feed">Feed</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
        </nav>
    )
}

export default NavLoggedIn
