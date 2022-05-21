import React from "react";
import "./Promotion.css";

export const Promotion = ({ pic1 }) => {
  return (
    <div>
      <div className="promotion">
        <div className="promotion-images">
          <img src={pic1} alt="" />
        </div>
        <div className="promotion-info">
          <h4>
            Need Financing? Talk to an{" "}
            <span style={{ color: "gold" }}>Auc</span>
            tionaX certified broker today!
          </h4>
        </div>
      </div>{" "}
      <div className="promotion-lg">
        <img src={pic1} alt="" />
        <div className="promotion-info-lg">
          <h3 style={{ color: "darkorange" }}>Need Financing?</h3>
          <h3>
            Talk to an <span style={{ color: "gold" }}>Auc</span>
            tionaX certified broker today! It's quick, easy, and guarantees the
            best rates for all bidders.
          </h3>
          <h3>
            <span style={{ color: "lightgreen" }}>Sign up </span>
            <span style={{ color: "gold" }}>today to get an amazing deal!</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
