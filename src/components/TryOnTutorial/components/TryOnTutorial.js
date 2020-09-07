import React from "react";

//Assets

import Laptop from "../../../assets/photo/try-on-2x.png";

//Assets
import PlaySvg from "../../../assets/svgs/play.svg";

//Styles
import "./TryOnTutorial.scss";

function TryOnTutorial() {
  return (
    <div id="TryOnTutorial">
      <div className="wrapper">
        <div className="text-wrapper">
          <div className="play-wrap">
            <PlaySvg className="icon" />
          </div>
          <h3 className="section-heading">Visual Try On</h3>
          <h5 className="section-p">
            Perfect Frames. How will they look? Will they fit right? Get real
            answers with our Virtual Try-On tool.
          </h5>
          <div className="cta-try">Try it now</div>
        </div>
        <div className="image-wrapper">
          <img className="img" src={Laptop} alt="laptop" />
        </div>
      </div>
    </div>
  );
}

export default TryOnTutorial;
