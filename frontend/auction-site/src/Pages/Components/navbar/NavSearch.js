import React from "react";

export const NavSearch = ({ size }) => {
  const format = size;
  return (
    <>
      {size === "small" && (
        <div className="navbar-sm">
          <input type="text" placeholder="Start searching " />
        </div>
      )}

      {size === "medium" && (
        <div className="navbar-md">
          <div className="navbar_Search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Start searching " />
            <select>
              <option>All vehicles</option>
              <option>Sedan</option>
              <option>Trucks</option>
              <option>SUVS</option>
              <option>Sport</option>
              <option>Heavy</option>
            </select>
          </div>
          <div>
            <button className="btn-secondary">Search</button>
          </div>
          <div></div>
        </div>
      )}

      {size === "large" && (
        <div className="navbar-lg">
          <div className="navbar_Search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Start searching " />
            <select>
              <option>All vehicles</option>
              <option>Sedan</option>
              <option>Trucks</option>
              <option>SUVS</option>
              <option>Sport</option>
              <option>Heavy</option>
            </select>
          </div>
          <div>
            <button className="btn-secondary">Search</button>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
};
