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
            <SingleCard image="/assets/black-women-shoes.jpeg" version="Nike Air Jordan-01" price="$200.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/pink-women-shoes.jpeg" version="Nike Air Jordan-10" price="$210.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/white-women-shoes.jpeg" version="Nike Air Jordan-100" price="$220.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/blackpink.jpeg" version="Nike Air Jordan-001" price="$230.20" rate={
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
            <SingleCard image="/assets/dunk-low-big-kids.png" version="Nike Dunk Low Big Kids" price="$200.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/jordan-1-retro-high.png" version="Nike Jordan-1 Retro High" price="$210.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/jordan-12.png" version="Nike Jordan-12" price="$220.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
            <SingleCard image="/assets/air-jordan-12.png" version="Nike Air Jordan-12" price="$230.20" rate={
              <RatingStar />
            } rating="(4.5)"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
