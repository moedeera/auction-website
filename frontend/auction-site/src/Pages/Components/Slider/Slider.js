import React, { useState } from "react";
import "./Slider.css";
import { Item } from "../item/Item";

export const Slider = () => {
  const [slide, moveSlide] = useState(1);

  //     const move = () => {

  // document.getElementsByClassName('slider-content')

  //   };

  return (
    <div className="container">
      <div className="slider-container">
        <div className="slider">
          <div className="arrow" id="arrow-left">
            <i className="fa fa-chevron-left"></i>
          </div>
          <div className="arrow" id="arrow-right">
            <i className="fa fa-chevron-right"></i>
          </div>
          <div className="slider-content">
            {" "}
            <Item selection={"promoted"} />
          </div>
        </div>
      </div>
    </div>
  );
};
