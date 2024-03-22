import React from "react";
import "../../App.css";
import "../Css/Navbar.css";
import NavbarLine from "./NavbarLine";
import NavCentre from "./NavCentre";

function Navbar(props) {
  return (
    <div className="bg  text-white py-5">
      {/* ---------------------------------------------------------First line Navbar--------------------------------------------------------- */}
      <NavbarLine />
      {/* ---------------------------------------------------------second line Navbar--------------------------------------------------------- */}
      <div>
        <NavCentre btn="Book Now"></NavCentre>
      </div>
    </div>
  );
}

export default Navbar;
