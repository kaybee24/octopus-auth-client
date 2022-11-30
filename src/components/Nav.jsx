import React from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'


const Nav = () => {
    return (
        <nav>
            <ul className='flex justify-center font-openSans space-x-8'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/my-feed">Feed</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
        </nav>
    )
}

export default Nav