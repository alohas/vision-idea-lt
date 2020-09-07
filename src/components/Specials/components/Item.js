import React from "react";

//Assets
import HeartSvg from "../../../assets/svgs/heart.svg";

//Styles
import "./Item.scss";

function Item({
  special,
  specialIcon,
  specialColor,
  imgSrc,
  oldPrice,
  newPrice,
  brand,
  model,
}) {
  var classNames = require("classnames");

  return (
    <div id="Product">
      <div className="special-labels">
        <div className={classNames("extendable", specialColor)}>
          <div className="square">{specialIcon}</div>
          <div className="text-wrap">
            <span className="text">{special}</span>
          </div>
          <div class="clearfix"></div>
        </div>

        <div className="favorite">
          <HeartSvg className="icon" />
        </div>
      </div>

      <div className="info">
        <div className="tn-wrap">
          <img className="tn" src={imgSrc} alt="glasses" />
        </div>
        <div className="prices">
          <div className="old">{oldPrice}</div>
          <div className="new">{newPrice}</div>
        </div>
        <div className="brand">{brand}</div>
        <div className="model">{model}</div>
      </div>
    </div>
  );
}

export default Item;
