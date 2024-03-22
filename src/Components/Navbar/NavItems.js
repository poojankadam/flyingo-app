import React from "react";
import { NavLink } from "react-router-dom";

function NavItems() {
  return (
    <ol className="flex space-x-14 font1">
      <li>
        <NavLink to="/help">Help</NavLink>
      </li>
      <li>
        <NavLink to="/about"> About </NavLink>
      </li>
      <li>
        <NavLink to="/contact">LogIn</NavLink>
      </li>
    </ol>
  );
}

export default NavItems;
