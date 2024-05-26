import React from "react";

const AboutPart2 = () => {
  return (
    <>
      <div className="allBenifits">
        <dev className="benifits">
          <div className="firstService">
            <div className="theService">
              <img src="/assets/truck-fast.svg" alt="truck" />
            </div>
            <h3>Free shipping</h3>
            <p>
              Enjoy seamless shopping with our complimentary shipping service.
            </p>
          </div>
          <div className="secondService">
            <div className="theService">
              <img src="/assets/shield-tick.svg" alt="truck" />
            </div>
            <h3>Secure Payment</h3>
            <p>
              Experience worry-free transactions with our secure payment
              options.
            </p>
          </div>
          <div className="thirdService">
            <div className="theService">
              <img src="/assets/support.svg" alt="truck" />
            </div>
            <h3>Love to help you</h3>
            <p>
              Our dedicated team is here to assist you every step of the way.
            </p>
          </div>
        </dev>
      </div>
    </>
  );
};

export default AboutPart2;
