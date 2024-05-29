import React from "react";
import SingleCard from "./SingleCard";
import { RatingStar } from "./RatingStar";


const Products = () => {
  return (
    <div>
      <div className="allProducts">
        <h1>Here Are Our <span>All Products</span></h1>
        <div className="mainContainer">
          <div className="textPart">
            <h2>
              Our <span>Man's</span> Products
            </h2>
            <p>
              Experience top-notch quality and style with our sought-after
              selections. Discover a world of comfort, design, and value
            </p>
          </div>
          <div className="cardPart">
            <SingleCard image="/assets/shoe4.svg" version="Nike Air Jordan-01" price="$200.20" rate={
              <RatingStar />
            } rating="(4.5)" />
            <SingleCard image="/assets/shoe5.svg" version="Nike Air Jordan-10" price="$210.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/shoe6.svg" version="Nike Air Jordan-100" price="$220.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/shoe7.svg" version="Nike Air Jordan-001" price="$230.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
          </div>
        </div>
        <div className="mainContainer">
          <div className="textPart">
            <h2>
              Our <span>Woman's</span> Products
            </h2>
            <p>
              Experience top-notch quality and style with our sought-after
              selections. Discover a world of comfort, design, and value
            </p>
          </div>
          <div className="cardPart">
            <SingleCard image="/assets/shoe4.svg" version="Nike Air Jordan-01" price="$200.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/shoe5.svg" version="Nike Air Jordan-10" price="$210.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/shoe6.svg" version="Nike Air Jordan-100" price="$220.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/shoe7.svg" version="Nike Air Jordan-001" price="$230.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
          </div>
        </div>
        <div className="mainContainer">
          <div className="textPart">
            <h2>
              Our <span>Kid's</span> Products
            </h2>
            <p>
              Experience top-notch quality and style with our sought-after
              selections. Discover a world of comfort, design, and value
            </p>
          </div>
          <div className="cardPart">
            <SingleCard image="/assets/shoe4.svg" version="Nike Air Jordan-01" price="$200.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/shoe5.svg" version="Nike Air Jordan-10" price="$210.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/shoe6.svg" version="Nike Air Jordan-100" price="$220.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/shoe7.svg" version="Nike Air Jordan-001" price="$230.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
