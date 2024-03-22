import React from "react";
import NavItems from './NavItems'
import Navlist from './Navlist'

function NavbarLine() {
  return (
    <div className="flex justify-evenly">
      <div>
        <label className="font1 text-xl font-semibold">Flyingo</label>
        <p className="font3 font-medium -mt-2 ml-2">Lets Fly</p>
      </div>
      <Navlist></Navlist>
      <NavItems></NavItems>
    </div>
  );
}

export default NavbarLine;
