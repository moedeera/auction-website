import React, { useContext } from "react";
import "./Item.css";

import { SiteContext } from "../../../Context/Context";

export const Item = () => {
  const { promotedCars } = useContext(SiteContext);

  return (
    <div className="container">
      <div className="items-current">
        <h3> Current Auctions</h3>
        <p>See All</p>
      </div>

      <div className="items">
        {" "}
        {promotedCars.map((item) => (
          <div className="posted-item" key={item.id}>
            <div className="item-images">
              <img src={item.pic} alt="" />
            </div>
            <div className="item-actions">
              <div className="item-info header">
                <h3 style={{ margin: "0" }}>{item.title}</h3>
                <p style={{ margin: "0" }}>{item.price}</p>
              </div>
              <div className="item-timer">
                {/* <p>
                  {item.days} days {item.hours} hours left on bid
                </p> */}
                <div className="time-unit">
                  <h3 style={{ margin: "0" }}>0{item.days}</h3>
                  <p style={{ margin: "0" }}>Days</p>
                </div>
                <div className="time-unit">
                  <h3 style={{ margin: "0" }}>{item.hours}</h3>
                  <p style={{ margin: "0" }}>Hours</p>
                </div>
                <div className="time-unit">
                  <h3 style={{ margin: "0" }}>{item.hours + 27}</h3>
                  <p style={{ margin: "0" }}>Minutes</p>
                </div>
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
