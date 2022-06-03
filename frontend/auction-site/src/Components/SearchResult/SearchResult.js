import React from "react";
import "./SearchResult.css";
import { Link } from "react-router-dom";

export const SearchResult = ({ searchResults }) => {
  return (
    <div className="search-results">
      {searchResults.map((car) => (
        <Link to={`/bid/${car.id}`}>
          <div className="search-result" key={car.id}>
            <img src={car?.pic} alt="" />

            <div className="search-info">
              <div className="info-header">
                <h3> {car.title}</h3>
                <h3 style={{ color: "steelblue" }}>{car.price}</h3>
              </div>

              <h4> {car.km},000km</h4>
              <p>
                {car.days} days and {car.hours} hours left
              </p>
              <p style={{ color: "grey" }}>New Jersey, NW</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
