import React, { useContext } from "react";
import "./Categories.css";
import adGif from "./advertisement.gif";
import adGif2 from "./ad2.gif";
import { Context } from "react";
import { SiteContext, SiteContextProvider } from "../../../Context/Context";
import { Item } from "../item/Item";

export const Categories = () => {
  const { currentCars } = useContext(SiteContext);
  console.log(currentCars);

  return (
    <div className="categories-container">
      <div className="categories">
        <div className="current-listings">
          <div className="current-item">
            <Item selection={"current"} />
          </div>
        </div>
        <h3>Categories</h3>
        <p>Categories</p>
        <div className="categories-listings">
          <div className="category" id="sedan">
            Sedans
          </div>
          <div className="category" id="truck">
            Trucks
          </div>
          <div className="category" id="SUV">
            SUVs
          </div>
          <div className="category" id="crossover">
            Crossovers
          </div>
        </div>
        <img src={adGif2} alt="" width={"100%"} />
      </div>
      <div className="secondary-advertisements">
        <div className="featured-item">
          <img src={adGif} alt="" />
        </div>
      </div>
    </div>
  );
};
