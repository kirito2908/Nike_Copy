import React from "react";

const AboutPart1 = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="about">
          <div className="leftText">
            <h2>
              We Provide You <span>Super Quality</span> Shoes
            </h2>
            <p className="disc1">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="disc2">
              Our dedication to detail and excellence ensures your satisfaction
            </p>
            <button className="viewDetails">View Details</button>
          </div>
          <div className="aboutShoe">
            <img src="/assets/shoe8.svg" alt="shoe8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPart1;
