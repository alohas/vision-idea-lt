import React, { useState } from "react";

//Assets

import Laptop from "../../../assets/photo/try-on-2x.png";

//Assets
import PlaySvg from "../../../assets/svgs/play.svg";

//Styles
import "./TryOnTutorial.scss";

function TryOnTutorial() {
  const [videoOpened, setVideoOpened] = useState(false);

  let classNames = require("classnames");

  return (
    <div id="TryOnTutorial">
      <div className="wrapper">
        <div className="text-wrapper">
          <div className="play-wrap" onClick={clickedVideo}>
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
      <div
        className={classNames("modal", { open: videoOpened })}
        onClick={clickedVideo}
      >
        <div className="modal-content">
          <iframe
            title="rick'roll"
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );

  function clickedVideo() {
    setVideoOpened(!videoOpened);
  }
}

export default TryOnTutorial;
