import React from "react";
import SingleCard from "./SingleCard";
import { Header } from "./Header";

const ForMen = () => {
  return (
    <div>
      <Header/>
        <div className="productContainer">
          <div className="mainContainer">
            <div className="textPart">
              <h2>
                Our <span>Popular</span> Products
              </h2>
              <p>
                Experience top-notch quality and style with our sought-after
                selections. Discover a world of comfort, design, and value
              </p>
            </div>
            <div className="cardPart">
                <SingleCard image="/assets/shoe4.svg" version="01" price="$200.20"/>
                <SingleCard image="/assets/shoe5.svg" version="10" price="$210.20"/>
                <SingleCard image="/assets/shoe6.svg" version="100" price="$220.20"/>
                <SingleCard image="/assets/shoe7.svg" version="001" price="$230.20"/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ForMen;
