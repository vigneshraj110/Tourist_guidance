import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="navs">
      <div className="navbar">
        <div className="heading">Tour Trekker</div>

        <ul className="navbarcontent">
          <NavLink
            to="/"
            className="navcontent  underline-transition"
            activeclassname="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="navcontent  underline-transition"
            activeclassname="active"
          >
            About Us
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
