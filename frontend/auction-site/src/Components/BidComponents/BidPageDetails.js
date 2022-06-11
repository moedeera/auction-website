import React from "react";
import "./BidPageDetails.css";

export const BidPageDetails = ({ bid }) => {
  return (
    <div className="bid-page-details">
      <div className="bid-details">
        <div className="bid-details-unit">
          <h3>Brand</h3>
          <p>{bid?.brand}</p>
        </div>

        <div className="bid-details-unit">
          <h3>Model</h3>
          <p>{bid?.title}</p>
        </div>
        <div className="bid-details-unit">
          <h3>Location</h3>
          <p>{bid?.location ? bid.location : "New York"}</p>
        </div>
        <div className="bid-details-unit">
          <h3>Fuel</h3>
          <p>{bid?.fuel ? bid.fuel : "Gasoline"}</p>
        </div>
      </div>
      <div className="bid-details ">
        <div className="bid-details-unit">
          <h3>Milage</h3>
          <p>{bid?.km},000</p>
        </div>
        <div className="bid-details-unit">
          <h3>Color</h3>
          <p>{bid?.color ? bid?.color : "Red"}</p>
        </div>
        <div className="bid-details-unit">
          <h3>Type</h3>
          <p>{bid?.type ? bid?.type : "Sedan"}</p>
        </div>
        <div className="bid-details-unit">
          <h3>Seller</h3>
          <p>{bid?.seller ? bid?.type : "Private"}</p>
        </div>
      </div>
      <div className="bid-details bid-buttons">
        <div className="seller-info">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <h3>John 670b</h3>
        </div>

        <button
          className="btn btn-primary"
          style={{ backgroundColor: "green" }}
        >
          <i className="fa fa-envelope-square" aria-hidden="true"></i>
          Contact Seller
        </button>
      </div>
    </div>
  );
};
