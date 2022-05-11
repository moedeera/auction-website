import React from "react";
import "./Homepage.css";
import pic1 from "./pic2.png";
import { Item } from "../Components/item/Item";

export const Homepage = () => {
  return (
    <div className="main-container">
      <div className="promotion">
        <div className="promotion-images">
          <img src={pic1} alt="" />
        </div>
        <div className="promotion-info">
          <h4>
            Need Financing? Talk to an{" "}
            <span style={{ color: "gold" }}>Auc</span>tionaX certified broker
            today!
          </h4>{" "}
          {/* <div className="promotion-cto">
            <p> Find out more </p>
            <i className="fas fa-chevron-right"></i>
          </div> */}
        </div>
      </div>
      {/* <div className="recommendations"></div> */}
      <Item />
    </div>
  );
};
