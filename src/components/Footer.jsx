import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-grey-100 p-4 mt-12">
            <ul className='flex justify-center font-openSans bg-grey-100 my-4 space-x-8'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/my-feed">Feed</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
        </footer>
    )
}

export default Footer