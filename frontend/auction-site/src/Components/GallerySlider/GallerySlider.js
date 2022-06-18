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
    "https://i.insider.com/5ef4fe145af6cc651e2e1977?width=750&format=jpeg&auto=webp",
    "https://images.unsplash.com/photo-1542399204-b8dd4af5113d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
