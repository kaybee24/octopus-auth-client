import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-grey-100 px-4">
            <ul className='flex justify-center font-openSans bg-grey-100 my-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/my-feed">Feed</Link></li>
                <li><Link to="#">New Post</Link></li>
                <li><Link to="#">New Event</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
        </footer>
    )
}

export default Footer