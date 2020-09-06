import React from "react";

//Assets
import CertifiedSvg from "../../../assets/svgs/certified.svg.js";
import CarSvg from "../../../assets/svgs/car.svg.js";
import PhoneSvg from "../../../assets/svgs/phone.svg.js";

//Styles
import "./TopBar.scss";

function TopBar() {
  return (
    <div id="TopBar">
      <div className="language-container">
        <div className="lang-wrap">
          <p className="language-selector">English ▼</p>
        </div>
      </div>
      <div className="perks-container">
        <div className="perk">
          <CertifiedSvg className="icon" />
          <p className="perk-name">CERTIFIED DEALER</p>
        </div>
        <div className="perk">
          <CarSvg className="icon" />
          <p className="perk-name">FREE SHIPPING AND RETURNS</p>
        </div>
        <div className="perk">
          <PhoneSvg className="icon" />
          <p className="perk-name">CUSTOMER SUPPORT</p>
        </div>
      </div>
      <div className="authorization-container">
        <div className="auth-wrap">
          <PhoneSvg className="icon" />
          <p className="authorization">Login / Register</p>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
