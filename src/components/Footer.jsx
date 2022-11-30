import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-ocean-800 text-offwhite-900 p-4 mt-12">
            <ul className='flex justify-center font-openSans my-4 space-x-8'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/my-feed">About</Link></li>
            </ul>
            <p className='container text-center'>&copy; Copyright 2022</p>
        </footer>
    )
}

export default Footer