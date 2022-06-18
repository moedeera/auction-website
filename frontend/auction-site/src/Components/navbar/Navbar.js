import React, { useContext, useState } from "react";
import "./Navbar.css";
import settings from "./settings.png";
import bell from "./bell.png";
import cart from "./cart.png";
import brand from "./brand.png";
import { Link } from "react-router-dom";

// import { MenuModals } from "../modals/Menu/MenuModals";
// import { SiteContext } from "../../../Context/Context";
import { SiteContext } from "../../Context/Context";
import { MenuModals } from "../modals/Menu/MenuModals";
export const Navbar = () => {
  const { setMenuModal, setMenu } = useContext(SiteContext);

  const openMenu = () => {
    setMenuModal(true);
  };
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="navbar_Header">
          <Link to={"/"}>
            {" "}
            <div
              className="navbar_title"
              style={{ backgroundColor: "white", textDecoration: "none" }}
            >
              <i
                className="fab fa-bandcamp icon-lg"
                style={{ color: "goldenrod" }}
              ></i>

              <h3>
                <span style={{ color: "gold" }}>Auc</span>

                <span style={{ color: "steelblue" }}>tionaX</span>
              </h3>
            </div>
          </Link>

          {/* <NavSearch size={"large"} /> */}
          <div className="navbar-si-post">
            <h5>Sign in</h5>
            <button
              className="btn btn-primary btn-bid"
              style={{ maxWidth: "10rem" }}
            >
              Post
            </button>
          </div>
        </div>
        {/* <NavSearch size={"medium"} /> */}

        <div className="navbar_Options">
          <img
            src={cart}
            alt=""
            onClick={() => {
              setMenuModal(true);
              setMenu([
                "Sedans",
                "Trucks",
                "SUVs",
                "Sport",
                "Classic",
                "Heavy",
                "Popular",
              ]);
            }}
          />
          <img
            src={brand}
            alt=""
            onClick={() => {
              setMenuModal(true);
              setMenu([
                "Toyota",
                "Honda",
                "Cheverolet",
                "Ford",
                "Mercedes-Benz",
                "Audi",
                "Mitsubishi",
                "Jeep",
                "Dodge",
                "Acura",
              ]);
            }}
          />
          <img
            src={bell}
            alt=""
            onClick={() => {
              setMenuModal(true);
              setMenu([
                "Newsletter",
                "Promotions",
                "Partnerships",
                "Live Auction Events",
                "Auto shows",
                "Blog",
                "Advertise",
              ]);
            }}
          />
          <img
            src={settings}
            alt=""
            onClick={() => {
              setMenuModal(true);
              setMenu([
                "Login",
                "Account",
                "Privacy",
                "Terms and Conditions",
                "Report stolen vehicles",
              ]);
            }}
          />
        </div>

        {/* <NavSearch size={"small"} /> */}
        {/* <div className="navbar_Options-md">
          <h4>Make Bids</h4>
          <h4>Categories</h4>
          <h4>Tracker</h4>
          <h4>Services</h4>
        </div> */}
      </div>
      <MenuModals selection={"hello"} />
    </div>
  );
};
