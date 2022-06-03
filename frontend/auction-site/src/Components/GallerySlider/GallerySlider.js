import React, { useState } from "react";
import "./GallerySlider.css";

export const GallerySlider = ({ bid }) => {
  const [image, setImage] = useState(0);

  const images = [
    bid?.pic,
    bid?.pic2,
    bid?.pic3,
    bid?.pic4,
    "https://i.gaw.to/content/photos/36/52/365270_Le_GMC_Sierra_AT4_2019_le_truck_de_l_apocalypse.jpg?1024x640",
    "https://images.caricos.com/h/honda/2020_honda_civic_sedan/images/1920x1080/2020_honda_civic_sedan_46_1920x1080.jpg",
    "https://images.caricos.com/h/honda/2020_honda_civic_sedan/images/1920x1080/2020_honda_civic_sedan_58_1920x1080.jpg",
    "https://media.torque.com.sg/public/2019/08/how-to-keep-car-interior-looking-like-new.jpg",
    "",
  ];

  return (
    <div className="bid-page-slider">
      <div className="main-image">
        {" "}
        {}
        <img src={images[image]} alt="" />
      </div>

      <div className="image-select">
        <div
          className="image-unit"
          onClick={() => {
            setImage(0);
          }}
        >
          <img
            src={bid?.pic}
            alt=""
            style={image === 0 ? { opacity: "0.9" } : { opacity: "0.5" }}
          />
        </div>
        <div
          className="image-unit"
          onClick={() => {
            setImage(1);
          }}
        >
          {" "}
          <img
            src={bid?.pic2}
            alt=""
            style={image === 1 ? { opacity: "0.9" } : { opacity: "0.5" }}
          />
        </div>
        <div
          className="image-unit"
          onClick={() => {
            setImage(2);
          }}
        >
          {" "}
          <img
            src={bid?.pic3}
            alt=""
            style={image === 2 ? { opacity: "0.9" } : { opacity: "0.5" }}
          />
        </div>
        <div
          className="image-unit"
          onClick={() => {
            setImage(3);
          }}
        >
          {" "}
          <img
            src={bid?.pic4}
            alt=""
            style={image === 3 ? { opacity: "0.9" } : { opacity: "0.5" }}
          />
        </div>
        <div
          className="image-unit upper"
          onClick={() => {
            setImage(4);
          }}
        >
          {" "}
          <img
            src={images[4]}
            alt=""
            style={image === 4 ? { opacity: "0.9" } : { opacity: "0.5" }}
          />
        </div>
        <div
          className="image-unit upper"
          onClick={() => {
            setImage(5);
          }}
        >
          {" "}
          <img
            src={images[5]}
            alt=""
            style={image === 5 ? { opacity: "0.9" } : { opacity: "0.5" }}
          />
        </div>
        <div
          className="image-unit upper"
          onClick={() => {
            setImage(6);
          }}
        >
          {" "}
          <img
            src={images[6]}
            alt=""
            style={image === 6 ? { opacity: "0.9" } : { opacity: "0.5" }}
          />
        </div>
        <div
          className="image-unit upper"
          onClick={() => {
            setImage(7);
          }}
        >
          {" "}
          <img
            src={images[7]}
            alt=""
            style={image === 7 ? { opacity: "0.9" } : { opacity: "0.5" }}
          />
        </div>
      </div>
    </div>
  );
};
