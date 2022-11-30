import React from "react";
import Logo from "./Logo";
import NavLoggedIn from "./NavLoggedIn.jsx";
import NavNotLoggedIn from "./NavNotLoggedIn.jsx";

export default function Header({ user }) {
  return (
    <header className="flex justify-between bg-ocean-900 py-4 px-12">
      <Logo />
      {user ? <NavLoggedIn /> : <NavNotLoggedIn />}
    </header>)
}