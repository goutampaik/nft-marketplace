import React from "react";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <>
      <div className="user-header-content">
        <div className="user-content-left">
          <span>Good Morning Akash!</span>
        </div>
        <div className="user-content-right">
          <div className="user-content-left-site">
            <button className="creator">Creator</button>
            <span>Collector</span>
          </div>
          <div className="user-content-right-site">
            <div className="user-setting">
              <a href="">
                <img src="./assets/img/icon/setting.svg" alt="" />
              </a>
            </div>
            <div className="user-notification">
              <a href="">
                <img src="./assets/img/icon/natifaction.svg" alt="" />
                <div className="notification-count">
                  <span>+6</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
