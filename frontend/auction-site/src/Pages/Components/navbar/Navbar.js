import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="navbar_Header">
          <h3>
            <span style={{ color: "goldenrod" }}>Auc</span>tionaX
            <i className="fab fa-bandcamp" style={{ color: "goldenrod" }}></i>
          </h3>
          <div className="navbar-si-post">
            <h5>Sign in</h5>
            <button className="btn-primary">Post</button>
          </div>
        </div>
        <div className="navbar_Search">
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="What are you looking for?"
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
            {/* <div className="search-result">
            <div className="result">Result</div>
          </div> */}
          </div>
        </div>
        <div className="navbar_Options">
          <i className="fas fa-shopping-cart fa-2x"></i>
          <i className="fab fa-buysellads fa-2x"></i>
          <i className="fas fa-bell fa-2x"></i>
          <i className="fas fa-cog fa-2x"></i>
        </div>
      </div>
    </div>
  );
};
