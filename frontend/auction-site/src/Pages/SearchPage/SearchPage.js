import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SiteContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import "./SearchPage.css";

export const SearchPage = () => {
  const { currentCars } = useContext(SiteContext);

  const { type } = useParams();
  const num = 3;

  return (
    <div className="container">
      <div className="search-page-container">
        <div className="search-page-header">
          <h2>
            {type} ({num}) results
          </h2>
        </div>
        <div className="search-filter">
          <ul>
            <li>Newest</li>
            <li>Lowest Price</li>
            <li>Highest Price</li>
            <li>Ending Soon</li>
          </ul>
        </div>
        <div className="search-results">
          {currentCars.map((car) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};
