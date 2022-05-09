import React from "react";
import "./Homepage.css";
import { Item } from "../Components/item/Item";

export const Homepage = () => {
  return (
    <div className="main-container">
      {/* <div className="promotion">promotion</div> */}
      <div className="recommendations"></div>
      <Item />
    </div>
  );
};
