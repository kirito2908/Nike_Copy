import React from "react";

const BodyPart = () => {
  return (
    <>
      <div className="container">
        <div className="subContainer">
          <div className="leftPart">
            <p className="collection">Our Summer collections</p>
            <h1>
              <span className="span1">The New Arrival </span>
              <br />
              <span className="span2">Nike</span> Shoes
            </h1>
            <p className="content">
              Discover stylish Nike arrivals, quality comfort, and innovation
              for your active life.
            </p>
            <button className="shopNow">
              Shop Now{" "}
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
            <div className="infoContainer">
                <div >
                    <p className="brands">1k+</p>
                    <p className="brand">Brands</p>
                </div>
                <div >
                    <p className="shops">500+</p>
                    <p className="shop">Shops</p>
                </div>
                <div >
                    <p className="customers">250k+</p>
                    <p className="customer">Customers</p>
                </div>
            </div>
          </div>
          <div className="rightPart">
            <img src="/assets/big-shoe1.png" alt="Big Shoe" className="showCase" />
            <div className="subShowCase">
              <div className="subShow1">
                <div className="show1">
                  <img src="/assets/thumbnail-shoe1.svg" alt="small Shoe1" className="firstImage" />
                </div>
              </div>
              <div className="subShow2">
                <div className="show2">
                  <img src="/assets/thumbnail-shoe2.svg" alt="small Shoe2" className="secondImage" />
                </div>
              </div>
              <div className="subShow3">
                <div className="show3">
                  <img src="/assets/thumbnail-shoe3.svg" alt="small Shoe3" className="thirdImage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyPart;
