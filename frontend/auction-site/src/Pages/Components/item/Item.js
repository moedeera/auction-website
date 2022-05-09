import React from "react";
import "./Item.css";

export const Item = () => {
  const data = [
    {
      id: 0,
      title: "Audi BMQ 2011",
      price: "15,650$",
      days: 2,
      hours: 15,
      pic: "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_960_720.jpg",
    },
    {
      id: 1,
      title: "BMW AMG 2014",
      price: "19,650$",
      days: 3,
      hours: 1,
      pic: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg",
    },
    {
      id: 2,
      title: "Audi BMQ 2011",
      price: "15,650$",
      days: 2,
      hours: 15,
      pic: "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_960_720.jpg",
    },
    {
      id: 3,
      title: "Audi BMQ 2011",
      price: "15,650$",
      days: 2,
      hours: 15,
      pic: "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_960_720.jpg",
    },
    {
      id: 4,
      title: "Audi BMQ 2011",
      price: "15,650$",
      days: 2,
      hours: 15,
      pic: "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_960_720.jpg",
    },
    {
      id: 5,
      title: "Audi BMQ 2011",
      price: "15,650$",
      days: 2,
      hours: 15,
      pic: "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_960_720.jpg",
    },
    {
      id: 6,
      title: "Audi BMQ 2011",
      price: "15,650$",
      days: 2,
      hours: 15,
      pic: "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_960_720.jpg",
    },
  ];

  return (
    <div className="items">
      {" "}
      {data.map((item) => (
        <div className="posted-item" key={item.id}>
          <div className="item-images">
            <img src={item.pic} alt="" />
          </div>
          <div className="item-actions">
            <div className="item-info header">
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
            <div className="item-timer">
              <p>
                {item.days} days and {item.hours} hours left on this bid
              </p>
            </div>
            <div className="item-info">
              <button>Place a bid</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
