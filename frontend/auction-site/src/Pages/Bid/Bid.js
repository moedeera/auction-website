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
            <div className="bid-top-card">
              <div className="bid-seller">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                  alt=""
                />
                <h2>John 845-ab</h2>
              </div>
              <div className="bid-item-header">
                <h2>{bid?.title}</h2>
                <h3>Bid:{bid?.price}</h3>
                <div className="bid-details">
                  <p>
                    {bid?.location ? bid.location : "Orville"}, SK, 8.9/10
                    AutoFax{" "}
                  </p>
                  <i className="fa fa-star "></i>
                </div>
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
            <div className="selected-image">
              <img src={bid?.pic} alt="" style={{ width: "100%" }} />
            </div>
            <div className="image-grid">
              <div className="bid-image-unit image-select">
                <img src={bid?.pic} alt="" />
              </div>
              <div className="bid-image-unit">
                <img src={bid?.pic2} alt="" />
              </div>
              <div className="bid-image-unit">
                <img src={bid?.pic} alt="" />
              </div>
              <div className="bid-image-unit">
                <img src={bid?.pic3} alt="" />
              </div>
              <div className="bid-image-unit">
                <img src={bid?.pic4} alt="" />
              </div>
              <div className="bid-image-unit">
                <img src={bid?.pic3} alt="" />
              </div>
            </div>

            <div className="bid-information">
              <div className="bid-information-board ">
                <div className="bid-information-unit">
                  <h3>Brand</h3>
                  <p>{bid?.brand}</p>
                </div>

                <div className="bid-information-unit">
                  <h3>Model</h3>
                  <p>{bid?.title}</p>
                </div>
                <div className="bid-information-unit">
                  <h3>Location</h3>
                  <p>{bid?.location ? bid.location : "New York"}</p>
                </div>
                <div className="bid-information-unit">
                  <h3>Fuel</h3>
                  <p>{bid?.fuel ? bid.fuel : "Gasoline"}</p>
                </div>
              </div>
              <div className="bid-information-board board-md">
                <div className="bid-information-unit">
                  <h3>Milage</h3>
                  <p>{bid?.km},000</p>
                </div>
                <div className="bid-information-unit">
                  <h3>Color</h3>
                  <p>{bid?.color ? bid?.color : "Red"}</p>
                </div>
                <div className="bid-information-unit">
                  <h3>Type</h3>
                  <p>{bid?.type ? bid?.type : "Sedan"}</p>
                </div>
                <div className="bid-information-unit">
                  <h3>Seller</h3>
                  <p>{bid?.seller ? bid?.type : "Private"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
