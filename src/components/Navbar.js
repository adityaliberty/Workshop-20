import React from "react";
import "../styles/Navbar.css";
import { BsBellFill } from "react-icons/bs";
import logo from "../Static/logo.png";
import dummy_photo from "../Static/dummy_photo.png"

function Navbar() {
  return (
    <div className="nav_main">
      <div className="nav_left">
        <div className="logo">
          <img src={logo} alt="" className="img" />
        </div>
        <div className="links">
          <ul>
            <div className="list_items">
              <li>PATIENTS</li>
            </div>
            <div className="list_items">
              <li>CALENDAR</li>
            </div>
            <div className="list_items">
              <li>USERS</li>
            </div>
            <div className="list_items">
              <li>BILLING</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="nav_right">
        <div className="bell">
          <BsBellFill size="1.5rem" />
          <div className="notifications">
            <p>1</p>
          </div>
        </div>
        <div className="avtar">
        <img src={dummy_photo} alt="" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
