import React from "react";
import { Link } from "react-router-dom";

import "./Menu.styles.scss";

const Menu = () => {
  return (
    <nav>
      <Link to="/">
        <li>HOME</li>
      </Link>

      <Link to="/product">
        <li>RECORDS</li>
      </Link>

      <Link to="/about">
        <li>ABOUT</li>
      </Link>

      <h1 className="logo">Vinyl Online Shop</h1>
    </nav>
  );
};

export default Menu;
