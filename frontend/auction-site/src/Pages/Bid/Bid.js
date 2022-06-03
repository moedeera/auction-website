import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GallerySlider } from "../../Components/GallerySlider/GallerySlider";
import { BidInfo } from "../../Components/BidInfo/BidInfo";
import "./Bid.css";
import axios from "axios";
import { SiteContext } from "../../Context/Context";

export const Bid = () => {
  let { id } = useParams();

  const { getBid, bid } = useContext(SiteContext);

  useEffect(() => {
    getBid(id);
  }, []);

  console.log(bid);
  return (
    <div className="container">
      <div className="bid-page-container">
        <div className="upper-section">
          <GallerySlider bid={bid} />
          <BidInfo bid={bid} />
        </div>

        <div className="bid-page-cta">Hello2</div>
        <div className="bid-page-info">Hello3</div>
      </div>
    </div>
  );
};
