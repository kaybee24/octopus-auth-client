import React from "react";
import Logo from "./Logo";
import NavLoggedIn from "./NavLoggedIn.jsx";
import NavNotLoggedIn from "./NavNotLoggedIn.jsx";

export default function Header({ user, posts, setPosts, search, setSearch }) {
  return (
    <>
      <Logo />
      <header>
        {user ? <NavLoggedIn
          search={search}
          setSearch={setSearch}
          posts={posts}
          setPosts={setPosts}
        /> : <NavNotLoggedIn />}
      </header>
    </>
  );

}