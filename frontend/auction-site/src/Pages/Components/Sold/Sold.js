import React from "react";
import "./Sold.css";

export const Sold = ({ soldCars }) => {
  return (
    <div className="sold-items">
      <h3
        style={{
          textAlign: "center",
          color: "var(--color-secondary)",
        }}
      >
        Sold Items
      </h3>
      <div className="sold-items-listing">
        {soldCars.map(
          (car, index) =>
            index < 4 && (
              <div className="sold-item" key={car.id}>
                <img src={car.pic} alt="" />
                <h4 style={{ color: "navy", margin: "0" }}>{car.title}</h4>
                <p style={{ color: "green", fontWeight: "700", margin: "0" }}>
                  {car.price}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};
