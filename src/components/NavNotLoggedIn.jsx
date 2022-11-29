import React from 'react'
import { Link } from 'react-router-dom'

const NavNotLoggedIn = () => {
    return (
        <nav>
            <ul className='flex justify-center font-openSans space-x-8'>
                NOT LOGGED IN
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    )
}

export default NavNotLoggedIn
