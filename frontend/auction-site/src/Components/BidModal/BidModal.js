import React, { useState } from "react";
import "./BidModal.css";
import axios from "axios";
import { useContext } from "react";
import { SiteContext } from "../../Context/Context";

export const BidModal = ({ showModal }) => {
  const [phase, setPhase] = useState(0);
  const { registerGuest, user } = useContext(SiteContext);

  return (
    <div className="bid-modal">
      <div className="upper-modal">
        {phase === 0 && (
          <div className="modal-first-question">
            <div className="modal-question-text">
              {" "}
              <h3>
                Would you like to make a bid as a guest or login/register?
              </h3>
            </div>
            <div className="login-choice">
              <button
                className="btn btn-primary btn-bid"
                onClick={() => {
                  setPhase("loading");
                  registerGuest();
                  console.log(user);
                  if (user !== null) {
                    setTimeout(setPhase(0), 3000);
                  }
                }}
              >
                Guest
              </button>
              <button className="btn btn-primary btn-bid">
                Login/Register
              </button>
            </div>
          </div>
        )}
        {phase === "loading" && (
          <div>
            <div class="loading">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
      <div className="lower-modal">
        <button
          className="btn btn-primary btn-bid"
          onClick={() => showModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
