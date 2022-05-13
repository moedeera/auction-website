import React, { useContext } from "react";
import "./MenuModal.css";
import { Context } from "react";
import { SiteContext } from "../../../../Context/Context";

export const MenuModals = ({ selection }) => {
  const { menuModal, setMenuModal } = useContext(SiteContext);

  if (!menuModal) {
    return;
  }
  return (
    <div className="modal">
      <div className="menu-modal">
        <div className="menu-modal-top">
          <div className="top-info">
            <h3>Shopping</h3>
            <p>See all in Bids</p>
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
          <li>Popular</li>
          <li>Trucks</li>
          <li>SUVs</li>
          <li>Sport</li>
          <li>Classic</li>
          <li>Heavy</li>
          <li>Popular</li>
        </ul>
      </div>
    </div>
  );
};
