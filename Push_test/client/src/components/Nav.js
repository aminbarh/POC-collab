import React, { Fragment } from "react";
import "../App.css";
import {Link} from "react-router-dom";

//components

function Nav() {

const navStyle={
    color: 'white'

};

  return (
    <nav className="Nav">
      <h3>Logo</h3>
      <ul className="nav-links">
          <Link style={navStyle} to="./Airport">
        <li>Airport</li>
        </Link>
        <Link style={navStyle} to="./Weather">
        <li>Weather</li>
        </Link>
        <Link style={navStyle} to="/Exercise">
        <li>Exercise</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
