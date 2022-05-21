import React from "react";
import "./AppHeader.css";

export const AppHeader = () => {
  return (
    <div className="appHeader">
      <div className="menu-lg">
        <div className="appBar-Services">
          <div className="dropdown">
            <h4 className="dropbtn">Make Bids</h4>
            <div className="dropdown-content">
              <a href="/">Popular</a>
              <a href="/">Sedans</a>
              <a href="/">Trucks</a>
              <a href="/">SUVs</a>
              <a href="/">Sport </a>
              <a href="/">Classics</a>
              <a href="/">Heavy</a>
            </div>
          </div>
          <div className="dropdown">
            <h4 className="dropbtn">Categories</h4>
            <div className="dropdown-content2">
              <a href="/">Brands</a>
              <a href="/">Year</a>
              <a href="/">Type</a>
              <a href="/">Price range</a>
            </div>
          </div>

          <div className="dropdown">
            <h4 className="dropbtn">Tracker</h4>
            <div className="dropdown-content3">
              <a href="/">Track Bids</a>
              <a href="/">Promotions</a>
              <a href="/">Partnerships</a>
              <a href="/">Live</a>
              <a href="/">Auto shows</a>
              <a href="/">Advertise</a>
            </div>
          </div>

          <div className="dropdown">
            <h4 className="dropbtn">Services</h4>
            <div className="dropdown-content4">
              <a href="/">Promote</a>
              <a href="/">Login</a>
              <a href="/">About us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-sm"></div>
    </div>
  );
};
