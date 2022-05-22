import React, { useContext } from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

import { SiteContext } from "../../Context/Context";

export const Item = ({ selection, size }) => {
  const { promotedCars, currentCars } = useContext(SiteContext);

  let cars;

  if (selection === "promoted") {
    cars = promotedCars;
  } else {
    cars = currentCars;
  }

  return (
    <div className="container">
      {!size && (
        <>
          <div className="items-current">
            {selection === "current" && <h3> Currently bidding</h3>}
            {selection === "promoted" && <h3> Featured Auctions</h3>}
            <p>See All</p>
          </div>
          <div className="items ">
            {" "}
            {cars.map(
              (item, index) =>
                index < 8 && (
                  <div className="posted-item current" key={item.id}>
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
                        <button
                          onClick={() => {
                            alert("hey");
                          }}
                        >
                          Place a bid
                        </button>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </>
      )}

      {size && (
        <>
          {" "}
          <div className="items-current items-lg">
            <h3> Currently bidding</h3>

            <p>See All</p>
          </div>
          <div className="items-lg ">
            {" "}
            {cars.map(
              (item, index) =>
                index < 4 && (
                  <div className="posted-item " key={item.id}>
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
                        <button
                          onClick={() => {
                            alert("hello");
                          }}
                        >
                          Place a bid
                        </button>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </>
      )}
    </div>
  );
};
