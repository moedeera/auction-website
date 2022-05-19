import React, { useContext } from "react";
import "./Categories.css";
import adGif from "./advertisement.gif";
import adGif2 from "./ad2.gif";
import ad3 from "./ad3.png";
import ad4 from "./ad-g.png";
import { Context } from "react";
import { SiteContext, SiteContextProvider } from "../../../Context/Context";
import { Item } from "../item/Item";
import { Slider } from "../Slider/Slider";

export const Categories = () => {
  const { currentCars } = useContext(SiteContext);
  console.log(currentCars);

  return (
    <div className="categories-container">
      <div className="categories">
        <div className="current-listings">
          <div className="current-item">
            <div className="ad-sm">
              {" "}
              <img src={ad4} alt="" width={"45%"} />
            </div>
            <Item selection={"current"} />
          </div>
          <div className="ad-sm">
            {" "}
            <img src={ad3} alt="" height={"250px"} />
          </div>
          {/* <Item selection={"current"} size={true} /> */}
        </div>
        <div className="current-item-header">
          <h3 className="current-item-h3">Categories</h3>
          <p className="current-item-p">Browse all</p>
        </div>

        <div className="categories-listings">
          <div className="category" id="sedan">
            <h3>Sedans</h3>
          </div>
          <div className="category" id="truck">
            <h3>Trucks</h3>
          </div>
          <div className="category" id="SUV">
            <h3>SUVs</h3>
          </div>
          <div className="category" id="sport">
            <h3>Sport</h3>
          </div>
          <div className="category" id="classic">
            <h3>Classic</h3>
          </div>
          <div className="category" id="heavy">
            <h3>Heavy</h3>
          </div>
        </div>
        <img src={adGif2} alt="" className="ad2" />
      </div>
      <div className="secondary-advertisements">
        <div className="featured-item">
          <img src={adGif} alt="" />
          <img src={ad3} alt="" />
        </div>
      </div>
    </div>
  );
};
