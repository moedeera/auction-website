import React, { useContext } from "react";
import "./Item.css";

import { SiteContext } from "../../../Context/Context";

export const Item = () => {
  const { test1, promotedCars } = useContext(SiteContext);

  return (
    <div className="container">
      <div className="items-current">Current Listings</div>

      <div className="items">
        {" "}
        {promotedCars.map((item) => (
          <div className="posted-item" key={item.id}>
            <div className="item-images">
              <img src={item.pic} alt="" />
            </div>
            <div className="item-actions">
              <div className="item-info header">
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
              <div className="item-timer">
                <p>
                  {item.days} days and {item.hours} hours left on this bid
                </p>
              </div>
              <div className="item-info">
                <button>Place a bid</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
