import React from "react";

//Components
import Item from "./Item";

//Assets
import GlassesFour from "../../../assets/photo/akiniai_4.jpg";
import GlassesThree from "../../../assets/photo/akiniai_3.jpg";
import GlassesTwo from "../../../assets/photo/akiniai_2.jpg";
import GlassesOne from "../../../assets/photo/akiniai_1.jpg";
import PercentSvg from "../../../assets/svgs/percent.svg";
import GiftSvg from "../../../assets/svgs/gift.svg";

//Styles
import "./Specials.scss";
import ArrowSmallSvg from "../../../assets/svgs/arr-small.svg";

function Specials() {
  return (
    <div id="Specials">
      <h2 className="specials-header bold">This spring's specials</h2>
      <div className="deal-slider">
        <div className="deal-container">
          <Item
            special="discount"
            specialIcon={<PercentSvg className="icon" />}
            imgSrc={GlassesTwo}
            oldPrice="€ 200.00"
            newPrice="€ 150.00"
            brand="ray ban"
            model="clubmaster optics"
          />

          <Item
            special="Free lenses"
            specialIcon={<GiftSvg className="icon" />}
            specialColor={"grey"}
            imgSrc={GlassesOne}
            oldPrice=""
            newPrice="€ 150.00"
            brand="Etnia barcelona"
            model="quito 52 bolgd"
          />

          <Item
            special="discount"
            specialIcon={<PercentSvg className="icon" />}
            imgSrc={GlassesThree}
            oldPrice="€ 200.00"
            newPrice="€ 150.00"
            brand="ray ban"
            model="clubmaster optics with single vision lense lorem ipsum dolore"
          />

          <Item
            special="free lenses"
            specialIcon={<GiftSvg className="icon" />}
            specialColor={"grey"}
            imgSrc={GlassesFour}
            oldPrice=""
            newPrice="€ 150.00"
            brand="Etnia barcelona"
            model="QUITO 52 BLGD with single vision lense lorem ipsum dolore"
          />
        </div>
        <div className="controls">
          <div className="left">
            <ArrowSmallSvg className="icon" />
          </div>
          <div className="right">
            <ArrowSmallSvg className="icon" />
          </div>
        </div>
      </div>

      <div className="center">
        <div className="cta-deals">See all deals</div>
      </div>
    </div>
  );
}

export default Specials;
