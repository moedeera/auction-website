import React, { useState, useContext } from "react";
import "./Navbar2.css";
import { SiteContext } from "../../../Context/Context";

function Navbar2({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const { brands } = useContext(SiteContext);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = brands.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search-container">
      <div className="search">
        <div>
          <div className="searchInputs">
            <input
              type="text"
              placeholder={placeholder}
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <i className="fa fa-search" aria-hidden="true"></i>
              ) : (
                <i
                  className="fa fa-times"
                  id="clearBtn"
                  onClick={clearInput}
                ></i>
              )}
            </div>
          </div>
          {filteredData.length !== 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <p
                    style={
                      value.name.length > 3
                        ? { textTransform: "capitalize" }
                        : { textTransform: "uppercase" }
                    }
                    key={key}
                    onClick={() => {
                      setWordEntered(value.name);
                    }}
                  >
                    {value.name}{" "}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div className="nv2-lg">
          <select>
            <option>All vehicles</option>
            <option>Sedan</option>
            <option>Trucks</option>
            <option>SUVS</option>
            <option>Sport</option>
            <option>Heavy</option>
          </select>
        </div>
        <div className="nv2-lg">
          <button className="btn-alternate">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
