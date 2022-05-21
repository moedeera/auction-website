import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <div className="bid-container">
        <div className="bid">
          <h1>{bid?.title}</h1>
          <p>{bid?.brand}</p>
        </div>
      </div>
    </div>
  );
};
