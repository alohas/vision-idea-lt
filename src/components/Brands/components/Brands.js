import React from "react";

//Assets
import Boss from "../../../assets/brands_logos/boss-orange-x2.png";
import Calvin from "../../../assets/brands_logos/calvin-clain-x2.png";
import Diesel from "../../../assets/brands_logos/diesel-x2.png";
import Marc from "../../../assets/brands_logos/marc-jacobs-x2.png";
import Will from "../../../assets/brands_logos/william-morris-x2.png";

//Styles
import "./Brands.scss";

function NavBar() {
  return (
    <div id="Brands">
      <div className="img-container">
        <img className="img" src={Boss} alt="logo" />
      </div>
      <div className="img-container">
        <img className="img" src={Calvin} alt="logo" />
      </div>
      <div className="img-container">
        <img className="img" src={Diesel} alt="logo" />
      </div>
      <div className="img-container">
        <img className="img" src={Marc} alt="logo" />
      </div>
      <div className="img-container">
        <img className="img" src={Will} alt="logo" />
      </div>
    </div>
  );
}

export default NavBar;
