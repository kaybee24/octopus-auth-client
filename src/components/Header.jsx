import React from "react";
import Logo from "./Logo";
import NavLoggedIn from "./NavLoggedIn.jsx";
import NavNotLoggedIn from "./NavNotLoggedIn.jsx";

export default function Header({ user }) {
  return (
    <>
      <Logo />
      <header className="flex justify-between bg-ocean-900 px-12">
        {user ? <NavLoggedIn /> : <NavNotLoggedIn />}
      </header>
    </>
  );

}