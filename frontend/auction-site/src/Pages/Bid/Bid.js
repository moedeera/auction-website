import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Bid.css";
import axios from "axios";
import { SiteContext } from "../../Context/Context";

export const Bid = () => {
  let { id } = useParams();

  const { getBid, bid } = useContext(SiteContext);

  useEffect(() => {
    getBid(id);
  }, []);

  console.log(bid);
  return (
    <div className="container">
      <div className="bid-container">
        <div className="bid">
          <div className="bid-upper-segment">
            <div className="bid-item-header">
              <h2>{bid?.title}</h2>
              <h3>Bid:{bid?.price}</h3>
              <div className="bid-details">
                <p>5-0 Liter V9, 4WD, 8.9/10 AutoFax </p>
              </div>
            </div>
            <div className="bid-watch">
              <div className="item-timer bid-item-timer">
                {/* <p>
                  {item.days} days {item.hours} hours left on bid
                </p> */}
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
              <button className="btn btn-alternate ">bid </button>
            </div>
          </div>

          <div className="bid-images">
            <img src={bid?.pic} alt="" />
            <div className="bid-images-grid">
              <img src={bid?.pic} alt="" className="image-select" />
              <img src={bid?.pic} alt="" />
              <img src={bid?.pic} alt="" />
              <img src={bid?.pic} alt="" />
              <img src={bid?.pic} alt="" />
              <img src={bid?.pic} alt="" />
              <img src={bid?.pic} alt="" />
              <img src={bid?.pic} alt="" />
            </div>
            <div className="bid-information">
              <div className="bid-info-header">Header</div>
            </div>
            <h3>VIN:10093998*****</h3>
            <h3>Odometer:{bid.km}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
