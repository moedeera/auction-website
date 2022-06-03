import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { SiteContext } from "../../Context/Context";
import { SearchResult } from "../../Components/SearchResult/SearchResult";
import { Link } from "react-router-dom";
import "./SearchPage.css";

export const SearchPage = () => {
  const { currentCars } = useContext(SiteContext);
  let cars = currentCars;
  const { type } = useParams();
  const num = currentCars.length;
  const [filter, setFilter] = useState(false);
  const [underlined, setUnderlined] = useState(null);

  const filterHandler = (type) => {
    if (type === "mileage") {
      if (filter) {
        cars = cars.sort(function (a, b) {
          return a.days - b.days;
        });
      } else {
        cars = cars.sort(function (a, b) {
          return b.days - a.days;
        });
      }
    }
    if (type === "price") {
      if (filter) {
        cars = cars.sort(function (a, b) {
          return a.cost - b.cost;
        });
      } else {
        cars = cars.sort(function (a, b) {
          return b.cost - a.cost;
        });
      }
    }

    if (type === "year") {
      if (filter) {
        cars = cars.sort(function (a, b) {
          return a.year - b.year;
        });
      } else {
        cars = cars.sort(function (a, b) {
          return b.year - a.year;
        });
      }
    }

    if (type === "time") {
      if (filter) {
        cars = cars.sort(function (a, b) {
          return a.days + a.hours - (b.days + b.hours);
        });
      } else {
        cars = cars.sort(function (a, b) {
          return b.days + b.hours - (a.days + a.hours);
        });
      }
    }

    setFilter(!filter);
  };

  return (
    <div className="container" style={{ border: "none" }}>
      <div className="search-page-container">
        <div className="search-page-header">
          <h2>
            {type} ({num}) results
          </h2>
        </div>
        <div className="search-filter">
          <div
            style={underlined === 0 ? { backgroundColor: "#abdbe380" } : {}}
            onClick={() => {
              filterHandler("year");
              setUnderlined(0);
            }}
          >
            Year
          </div>
          <div
            style={underlined === 1 ? { backgroundColor: "#abdbe380" } : {}}
            onClick={() => {
              filterHandler("mileage");
              setUnderlined(1);
            }}
          >
            Mileage
          </div>
          <div
            style={underlined === 2 ? { backgroundColor: "#abdbe380" } : {}}
            onClick={() => {
              filterHandler("price");
              setUnderlined(2);
            }}
          >
            Price
          </div>
          <div
            style={underlined === 3 ? { backgroundColor: "#abdbe380" } : {}}
            onClick={() => {
              filterHandler("time");
              setUnderlined(3);
            }}
          >
            Auction time
          </div>
        </div>

        <SearchResult searchResults={cars} />
      </div>
    </div>
  );
};
