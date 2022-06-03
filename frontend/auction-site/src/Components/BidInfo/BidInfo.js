import React from "react";
import "./BidInfo.css";

export const BidInfo = ({ bid }) => {
  return (
    <div className="info-section">
      <div className="info-section-upper">
        <div className="title">
          <h2>{bid?.title}</h2>
        </div>
        <div className="info">
          <h4>{bid?.price}</h4>
        </div>
        <div className="timer">
          <div className="item-timer">
            <div className="time-unit">
              <h3 style={{ margin: "0" }}>0{bid.days}</h3>
              <p style={{ margin: "0" }}>Days</p>
            </div>
            <div className="time-unit">
              <h3 style={{ margin: "0" }}>{bid.hours}</h3>
              <p style={{ margin: "0" }}>Hours</p>
            </div>
            <div className="time-unit">
              <h3 style={{ margin: "0" }}>{bid.hours + 27}</h3>
              <p style={{ margin: "0" }}>Minutes</p>
            </div>
          </div>
        </div>
        <div className="info-section-CTA">
          <button className="btn btn-primary">Bid Now</button>
          {/* <button className="btn btn-primary" id="contact-seller">Contact</button> */}
        </div>
      </div>
      <div className="info-section-lower">
        <h3>About Vehicle</h3>
        <p>
          Moderately used but is well kept, with a full car fax report and extra
          images to show all angles of the vehicle. feel free to come by for a
          test drive
        </p>
        <div>
          <h3>Viewer rating</h3>
          <div className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star" style={{ color: "grey" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};
