import React from "react";

//Assets
import YoutubeSvg from "../../../assets/svgs/youtube.svg";
import InstaSvg from "../../../assets/svgs/insta.svg";
import FbSvg from "../../../assets/svgs/fb.svg";

//Styles
import "./Footer.scss";

function Footer() {
  return (
    <div id="Footer">
      <div className="top">
        <p className="copyright small">&#169; Vision</p>
        <div className="f-menu">
          <a
            className="f-menu-link"
            href="https://www.idea.lt/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Privacy policy
          </a>
          <a
            className="f-menu-link"
            href="https://www.idea.lt/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Terms & conditions
          </a>
          <a
            className="f-menu-link"
            href="https://www.idea.lt/"
            rel="noreferrer noopener"
            target="_blank"
          >
            30 day return policy
          </a>
          <a
            className="f-menu-link"
            href="https://www.idea.lt/"
            rel="noreferrer noopener"
            target="_blank"
          >
            Shipping policy
          </a>
        </div>
        <div className="so-me">
          <InstaSvg className="icon" />
          <FbSvg className="icon" />
          <YoutubeSvg className="icon" />
        </div>
      </div>

      <div className="bottom">
        <p className="small idealt">
          Design:{" "}
          <a
            className="idea-anchor"
            href="https://www.idea.lt/"
            rel="noreferrer noopener"
            target="_blank"
          >
            born in idea
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
