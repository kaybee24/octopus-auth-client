import React from 'react'
import Burger from './Burger.jsx'
import ScrollToTop from './scrollToTop.jsx'

const NavLoggedIn = () => {
    return (
        <div className='flex gap-[20px]'>
            {/*             <div className='flex font-openSans space-x-8 w-[3em]'>
                LOGGED IN
            </div> */}
            <Burger />
            <ScrollToTop  />
        </div>
    )
}

export default NavLoggedIn
