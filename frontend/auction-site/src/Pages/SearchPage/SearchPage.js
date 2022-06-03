import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SiteContext } from "../../Context/Context";
import { SearchResult } from "../../Components/SearchResult/SearchResult";
import { Link } from "react-router-dom";
import "./SearchPage.css";

export const SearchPage = () => {
  const { currentCars } = useContext(SiteContext);

  const { type } = useParams();
  const num = currentCars.length;

  return (
    <div className="container" style={{ border: "none" }}>
      <div className="search-page-container">
        <div className="search-page-header">
          <h2>
            {type} ({num}) results
          </h2>
        </div>
        <div className="search-filter">
          <div>Newest</div>
          <div>Lowest Price</div>
          <div>Highest Price</div>
          <div>Ending Soon</div>
        </div>

        <SearchResult searchResults={currentCars} />
      </div>
    </div>
  );
};
