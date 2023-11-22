import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo1.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <Link to="/add" className="btn_add">
            ADD ITEM
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
