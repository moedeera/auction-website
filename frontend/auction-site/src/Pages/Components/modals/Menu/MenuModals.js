import React, { useContext } from "react";
import "./MenuModal.css";
import { Context } from "react";
import { SiteContext } from "../../../../Context/Context";

export const MenuModals = () => {
  const { menuModal, setMenuModal, menu, setMenu } = useContext(SiteContext);

  if (!menuModal) {
    return;
  }
  return (
    <div className="modal">
      <div className="menu-modal">
        <div className="menu-modal-top">
          <div className="top-info">
            {menu[0] === "Sedans" && (
              <>
                <h3>Shop for Bids</h3>
                <p>See all in Bids</p>
              </>
            )}{" "}
            {menu[0] === "Toyota" && (
              <>
                <h3>Brands</h3>
                <p>See all in Brands</p>
              </>
            )}
            {menu[0] === "Newsletter" && (
              <>
                <h3>Notices</h3>
                <p>Track bids</p>
              </>
            )}
            {menu[0] === "Login" && (
              <>
                <h3>Settings</h3>
                {/* <p>See all in Brands</p> */}
              </>
            )}
          </div>
          <div className="modal-close">
            <i
              className="fa fa-times"
              onClick={() => {
                setMenuModal(false);
              }}
            ></i>
          </div>
        </div>

        <ul>
          {menu.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
