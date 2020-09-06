import React from "react";

//Assets
import VisionLogoSvg from "../../../assets/vision-logo.svg";
import BasketSvg from "../../../assets/svgs/basket.svg";
import SearchSvg from "../../../assets/svgs/search.svg";
import BoxSvg from "../../../assets/svgs/box.svg";
import HeartSvg from "../../../assets/svgs/heart.svg";

//Styles
import "./NavBar.scss";

function NavBar() {
  return (
    <div id="NavBar">
      <div className="l-side">
        <div className="logo-wrap">
          <VisionLogoSvg className="logo" />
        </div>

        <div className="separator"></div>

        <div className="menu">
          <div className="item">GLASSES ▼</div>
          <div className="item">SUNGLASSES ▼</div>
          <div className="item">HELP ME CHOOSE ▼</div>
          <div className="item">VISUAL TRY ON</div>
          <div className="item">BOOK AN EYE TEST</div>
        </div>
      </div>
      <div className="r-side">
        <div className="cart">
          <div className="icon-wrap">
            <BoxSvg className="icon" />
          </div>
          <div className="icon-wrap bag">
            <BasketSvg className="icon" />
          </div>
          <div className="icon-wrap">
            <HeartSvg className="icon" />
          </div>
        </div>

        <div className="separator"></div>

        <div className="search">
          <SearchSvg className="s-icon" />
          <span className="search-txt">Search</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
