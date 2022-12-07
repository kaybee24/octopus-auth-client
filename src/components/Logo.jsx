import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <>
            <Link to="/">
                <img 
                src="images/octopus_logo_02.png" 
                className='rounded-full w-[5rem] md:w-[6rem] border-4 border-coral-500 m-6' />
            </Link>
        </>
    )
}

export default Logo
