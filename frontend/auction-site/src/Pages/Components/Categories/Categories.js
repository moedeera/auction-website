import React from "react";
import "./Categories.css";
import adGif from "./advertisement.gif";
import adGif2 from "./ad2.gif";

export const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories">
        <h3>Featured</h3>
        <p>Browse all</p>
        <div className="categories-listings">
          <div className="category">Sedans</div>
          <div className="category">Trucks</div>
          <div className="category">SUVs</div>
          <div className="category">Crossovers</div>
          <div className="category">Sport</div>
          <div className="category">Heavy</div>
        </div>
        <h3>Featured</h3>
        <p>Categories</p>
        <div className="categories-listings">
          <div className="category">Sedans</div>
          <div className="category">Trucks</div>
          <div className="category">SUVs</div>
          <div className="category">Crossovers</div>
        </div>
        <img src={adGif2} alt="" />
      </div>
      <div className="secondary-advertisements">
        <div className="featured-item">
          <img src={adGif} alt="" />
        </div>
      </div>
    </div>
  );
};
