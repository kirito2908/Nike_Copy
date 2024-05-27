import React from "react";

const AboutPart3 = () => {
  return (
    <>
      <div className="about3">
        <div className="nextAbout">
          <div className="leftImage">
            <img src="/assets/offer.svg" alt="Offer" />
          </div>
          <div className="rightAbout">
            <h2><span>Special</span> Offer</h2>
            <p className="discription1">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <p className="discription2">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
            <div className="buttons">
              <button className="firstButton">
                Shop Now
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0886 6.18499C10.8717 6.43163 10.8717 6.83153 11.0886 7.07817L13.1032 9.36842H5.55556C5.24873 9.36842 5 9.65119 5 10C5 10.3488 5.24873 10.6316 5.55556 10.6316H13.1032L11.0886 12.9218C10.8717 13.1685 10.8717 13.5684 11.0886 13.815C11.3056 14.0617 11.6574 14.0617 11.8743 13.815L14.8373 10.4466C15.0542 10.1999 15.0542 9.80005 14.8373 9.55341L11.8743 6.18499C11.6574 5.93834 11.3056 5.93834 11.0886 6.18499Z"
                    fill="#FF6452"
                  />
                </svg>
              </button>
              <button className="secondButton">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPart3;
