import React, { useState } from "react";
import "./GallerySlider.css";

export const GallerySlider = ({ bid }) => {
  const [image, setImage] = useState(0);
  return (
    <div className="bid-page-slider">
      <div className="main-image">
        {" "}
        <img src={bid?.pic} alt="" />
      </div>
      <div className="image-select">
        <div className="image-unit">
          <img src={bid?.pic} alt="" />
        </div>
        <div className="image-unit">
          {" "}
          <img src={bid?.pic2} alt="" />
        </div>
        <div className="image-unit">
          {" "}
          <img src={bid?.pic3} alt="" />
        </div>
        <div className="image-unit">
          {" "}
          <img src={bid?.pic4} alt="" />
        </div>
        <div className="image-unit upper">
          {" "}
          <img src={bid?.pic3} alt="" />
        </div>
        <div className="image-unit upper">
          {" "}
          <img src={bid?.pic4} alt="" />
        </div>
        <div className="image-unit upper">
          {" "}
          <img src={bid?.pic3} alt="" />
        </div>
        <div className="image-unit upper">
          {" "}
          <img src={bid?.pic4} alt="" />
        </div>
      </div>
    </div>
  );
};
