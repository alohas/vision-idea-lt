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

      <ul className="perks-container">
        <li className="perk">
          <CertifiedSvg className="icon" />
          <p className="perk-name">CERTIFIED DEALER</p>
        </li>
        <li className="perk">
          <CarSvg className="icon" />
          <p className="perk-name">FREE SHIPPING AND RETURNS</p>
        </li>
        <li className="perk">
          <PhoneSvg className="icon" />
          <p className="perk-name">CUSTOMER SUPPORT</p>
        </li>
      </ul>

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
