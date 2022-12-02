import React from 'react';
import Burger from './Burger.jsx'
import ScrollToTop from './scrollToTop.jsx'
import Search from './Search.jsx'

const NavLoggedIn = ({ search, setSearch, posts, setPosts }) => {

    return (
        <>
            <div className='absolute top-10 left-40'>
                {/*             <div className='flex font-openSans space-x-8 w-[3em]'>
                LOGGED IN
            </div> */}

                <Search
                    search={search}
                    setSearch={setSearch}
                    posts={posts}
                    setPosts={setPosts}
                />
            </div>
            <Burger />
            <ScrollToTop />
        </>
    )
}

export default NavLoggedIn
