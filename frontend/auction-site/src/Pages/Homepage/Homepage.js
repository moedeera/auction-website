import React, { useContext } from "react";
import "./Homepage.css";
import pic1 from "./pic2.png";
import { Item } from "../Components/item/Item";
import { SiteContext } from "../../Context/Context";

export const Homepage = () => {
  const { soldCars } = useContext(SiteContext);
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

      <Item />
      <div className="sold-items">
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Sold Items
        </h3>
        <div className="sold-items-listing">
          {soldCars.map((car) => (
            <div className="sold-item" key={car.id}>
              <img src={car.pic} alt="" />
              <h4 style={{ color: "navy" }}>{car.title}</h4>
              <p style={{ color: "green", fontWeight: "700" }}>{car.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
