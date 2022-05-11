import React from "react";
import "./Navbar.css";
import { NavSearch } from "./NavSearch";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="navbar_Header">
          <div className="navbar_title">
            <i
              className="fab fa-bandcamp icon-lg"
              style={{ color: "goldenrod" }}
            ></i>

            <h3>
              <span style={{ color: "gold" }}>Auc</span>tionaX
            </h3>
          </div>
          {/* <NavSearch size={"large"} /> */}
          <div className="navbar-si-post">
            <h5>Sign in</h5>
            <button className="btn-primary">Post</button>
          </div>
        </div>
        {/* <NavSearch size={"medium"} /> */}

        <div className="navbar_Options">
          <i className="fas fa-shopping-cart fa-2x"></i>
          <i className="fab fa-buysellads fa-2x"></i>
          <i className="fas fa-bell fa-2x"></i>
          <i className="fas fa-cog fa-2x"></i>
        </div>

        {/* <NavSearch size={"small"} /> */}
        <div className="navbar_Options-md">
          <h4>Make Bids</h4>
          <h4>Categories</h4>
          <h4>Tracker</h4>
          <h4>Services</h4>
        </div>
      </div>
    </div>
  );
};
