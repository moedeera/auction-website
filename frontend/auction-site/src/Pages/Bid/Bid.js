import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GallerySlider } from "../../Components/GallerySlider/GallerySlider";
import { BidInfo } from "../../Components/BidInfo/BidInfo";
import { BidPageDetails } from "../../Components/BidComponents/BidPageDetails";
import { BidModal } from "../../Components/BidModal/BidModal";
import "./Bid.css";
import axios from "axios";
import { SiteContext } from "../../Context/Context";

export const Bid = () => {
  let { id } = useParams();

  const { getBid, bid } = useContext(SiteContext);
  const [modal, showModal] = useState(false);
  useEffect(() => {
    getBid(id);
  }, []);

  return (
    <div className="container">
      <div className="bid-page-container">
        <div className="upper-section">
          <GallerySlider bid={bid} />
          <BidInfo bid={bid} showModal={showModal} />
        </div>

        <BidPageDetails bid={bid} />
      </div>
      {modal && <BidModal showModal={showModal} />}
    </div>
  );
};
