import React from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'

const NavNotLoggedIn = () => {
    return (
        <nav>
            <ul className='flex justify-center font-openSans space-x-8'>
                NOT LOGGED IN
            </ul>

        </nav>
    )
}

export default NavNotLoggedIn
