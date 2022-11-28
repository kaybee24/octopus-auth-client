import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex justify-between bg-grey-100 py-4 px-12">
      <Logo />
      <Nav />
    </header>)
}
