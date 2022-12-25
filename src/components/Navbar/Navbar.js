import React from "react";
import { Burger, Nav, NavIcon, NavLink } from "./NavbarElements";


function Navbar({toggle}) {
  return (
    <>
      <Nav>
        <NavLink to="/"><Burger />Burger</NavLink>
        <NavIcon onClick={toggle}>
            <p>Menu</p>
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;