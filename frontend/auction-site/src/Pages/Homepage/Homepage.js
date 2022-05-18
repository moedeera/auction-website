import React, { useContext } from "react";
import "./Homepage.css";
import pic1 from "./pic2.png";
import { Item } from "../Components/item/Item";
import { Sold } from "../Components/Sold/Sold";
import { Promotion } from "../Components/promotion/Promotion.js";
import { SiteContext } from "../../Context/Context";
import { Categories } from "../Components/Categories/Categories";
import { Slider } from "../Components/Slider/Slider";

export const Homepage = () => {
  const { soldCars } = useContext(SiteContext);
  return (
    <div className="main-container">
      <Promotion pic1={pic1} />
      <Item selection={"promoted"} />
      <Sold soldCars={soldCars} />
      {/* <Slider /> */}

      <Categories />
    </div>
  );
};
