import React, { useContext } from "react";
import "./Homepage.css";
import pic1 from "./pic2.png";
import { Item } from "../Components/item/Item";
import { Sold } from "../Components/Sold/Sold";
import { Promotion } from "../Components/promotion/Promotion.js";
import { SiteContext } from "../../Context/Context";
import { Categories } from "../Components/Categories/Categories";

export const Homepage = () => {
  const { soldCars } = useContext(SiteContext);
  return (
    <div className="main-container">
      <Promotion pic1={pic1} />
      <Item />
      <Sold soldCars={soldCars} />
      <Categories />
    </div>
  );
};
