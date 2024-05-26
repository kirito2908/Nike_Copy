import React from "react";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <footer>
          <div className="upperPart">
            <div className="leftSide">
              <Link to="/">
                <img src="/assets/header-logo.svg" alt="Nike" />
              </Link>
              <p className="footerText">
                Get shoes ready for the new term at your nearest Nike store.
                Find Your perfect Size In Store. Get Rewards
              </p>
              <div className="socialMedia">
                <div className="facebook">
                  <img src="/assets/facebook.svg" alt="facebook" />
                </div>
                <div className="twitter">
                  <img src="/assets/twitter.svg" alt="twitter" />
                </div>
                <div className="instagram">
                  <img src="/assets/instagram.svg" alt="instagram" />
                </div>
              </div>
            </div>
            <div className="rightSide">
              <div className="footerProduct">
                <h4>Products</h4>
                <ul>
                  <li>Air Force 1</li>
                  <li>Air Max 1</li>
                  <li>Air Jordan 1</li>
                  <li>Air Force 2</li>
                  <li>Nike Waffle Racer</li>
                  <li>Nike Cortez</li>
                </ul>
              </div>
              <div className="footerHelp">
                <h4>Help</h4>
                <ul>
                  <li>About Us</li>
                  <li>FAQs</li>
                  <li>How It Works</li>
                  <li>Private Policy</li>
                  <li>Payment Policy</li>
                </ul>
              </div>
              <div className="footerContact">
                <h4>Get In Touch</h4>
                <ul>
                  <li>customer@nike.com</li>
                  <li>+92554862354</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="belowPart">
            <p className="copyright">
              <FaRegCopyright /> Copyright. All rights reserved.
            </p>
            <p className="terms">Terms & Conditions</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
