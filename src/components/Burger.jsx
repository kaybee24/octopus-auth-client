import { Link } from "react-router-dom";
import React, { slide as Menu } from 'react-burger-menu';
import "../App.css"


const Burger = () => {

  return (
    <Menu>
      <ul className="items-center justify-center space-y-8">
        <li className="text-gray-600 hover:text-blue-600">
          <Link to="/">Home</Link>
        </li>
        <li className="text-gray-600 hover:text-blue-600">
          <Link to="/my-feed">Feed Posts</Link>
        </li>
        <li className="text-gray-600 hover:text-blue-600">
          <Link to="/feed-events">Feed Events</Link>
        </li>
        <li className=" text-gray-600 hover:text-blue-600">
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </Menu>

  );
}

export default Burger
