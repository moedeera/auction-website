import React, { useContext, useState } from "react";
import "./Slider.css";
import pic1 from "./ad01.jpg";

import { SiteContext } from "../../../Context/Context";

export const Slider = () => {
  const [slide, moveSlide] = useState(true);
  const { promotedCars } = useContext(SiteContext);

  const move = () => {
    moveSlide(!slide);
  };

  return (
    <div className="container xl-slide">
      <div className="slider-header">
        {" "}
        <h3>Currently bidding</h3>
      </div>
      <div className="slider">
        <div className="slider-box">
          <div
            className="arrow"
            id="arrow-left"
            style={slide ? { opacity: "0.2" } : { opacity: "1" }}
          >
            <i
              className="fa fa-chevron-left"
              onClick={() => {
                !slide && move();
              }}
            ></i>
          </div>
          <div
            className="arrow"
            id="arrow-right"
            style={!slide ? { opacity: "0.2" } : { opacity: "1" }}
          >
            <i
              className="fa fa-chevron-right"
              onClick={() => {
                slide && move();
              }}
            ></i>
          </div>
          <div className="slider-container">
            <div className={slide ? "slider-content" : "slider-content-moved"}>
              {" "}
              {promotedCars.map((item) => (
                <div className="posted-item-slider" key={item.id}>
                  <div className="item-images">
                    <img src={item.pic} alt="" />
                  </div>
                  <div className="item-actions">
                    <div className="item-info header">
                      <h3 style={{ margin: "0" }}>{item.title}</h3>
                      <p style={{ margin: "0" }}>{item.price}</p>
                    </div>
                    <div className="item-timer">
                      {/* <p>
                  {item.days} days {item.hours} hours left on bid
                </p> */}
                      <div className="time-unit">
                        <h3 style={{ margin: "0" }}>0{item.days}</h3>
                        <p style={{ margin: "0" }}>Days</p>
                      </div>
                      <div className="time-unit">
                        <h3 style={{ margin: "0" }}>{item.hours}</h3>
                        <p style={{ margin: "0" }}>Hours</p>
                      </div>
                      <div className="time-unit">
                        <h3 style={{ margin: "0" }}>{item.hours + 27}</h3>
                        <p style={{ margin: "0" }}>Minutes</p>
                      </div>
                    </div>
                    <div className="item-info">
                      <button>Place a bid</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="slider-advertisement">
          <img src={pic1} alt="" />
        </div>
      </div>
    </div>
  );
};
