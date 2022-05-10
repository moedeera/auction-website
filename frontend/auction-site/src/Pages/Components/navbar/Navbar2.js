import React, { useState } from "react";
import "./Navbar2.css";

function Navbar2({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
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
                  <a className="dataItem" href={value.link} key={key}>
                    <p>{value.title} </p>
                  </a>
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
