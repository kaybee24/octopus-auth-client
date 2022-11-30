import React from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'

const NavNotLoggedIn = () => {
    return (
        <nav className='relative'>
            <ul className='flex justify-center font-openSans space-x-8'>
                NOT LOGGED IN
                <li><Link to="/">Home</Link></li>
            </ul>
            <Burger/>
        </nav>
    )
}

export default NavNotLoggedIn
