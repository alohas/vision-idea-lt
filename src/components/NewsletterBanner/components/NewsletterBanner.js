import React from "react";

//Assets
import CupOfCoffee from "../../../assets/photo/newsletter-L-2x.jpg";
import TableThings from "../../../assets/photo/newsletter-R-2x.jpg";

//Styles
import "./NewsletterBanner.scss";

function NewsletterBanner() {
  return (
    <div id="NewsletterBanner">
      <div className="image-left">
        <img src={CupOfCoffee} alt="cup" className="image" />
      </div>
      <div className="newsletter-form-wrap">
        <form className="newsletter-form">
          <h3 className="form-header">
            Don't miss discounts and new collections
          </h3>

          <div className="email-input-field">
            <input
              className="email-input"
              name="email"
              placeholder="Your email here"
              required
            ></input>
            <button className="submit-button" type="submit" name="subscribe">
              Subscribe
            </button>
          </div>

          <div className="form-policy">
            <p className="policy notes">
              By subscribing you AGREE with processing of your personal data,
              and accept that you would like to hear about our products and
              latest offers. For more details, please read our
            </p>

            <p className="policy notes">
              <a
                className="policy-link"
                href="https://www.idea.lt/"
                rel="noreferrer noopener"
                target="_blank"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </form>
      </div>
      <div className="image-right">
        <img src={TableThings} alt="items" className="image" />
      </div>
    </div>
  );
}

export default NewsletterBanner;
