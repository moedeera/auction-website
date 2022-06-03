import React from "react";
import { useParams } from "react-router-dom";
import "./SearchPage.css";

export const SearchPage = () => {
  const { type } = useParams();

  return <div className="container">You searched for {type} </div>;
};
