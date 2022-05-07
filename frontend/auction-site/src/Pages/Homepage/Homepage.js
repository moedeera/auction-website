import React from "react";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="main-container">
      {/* <div className="promotion">promotion</div> */}
      <div className="recommendations">
        <div className="items">
          {" "}
          <div className="posted-item">
            <div className="item-images">
              <img
                src="https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_960_720.jpg"
                alt=""
              />
            </div>
            <div className="item-actions">
              <div className="item-info">
                <h3>Audi BMQ 2011</h3>
                <p>15,000$</p>
              </div>
              <div className="item-info">
                <button>Bid</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
