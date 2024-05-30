import React from "react";
import SingleCard from "./SingleCard";
import { Header } from "./Header";
import Footer from "./Footer";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Products from "./Products";

const ForMen = () => {
  const options = {
    loop : true,
      margin : 10,
      autoplay: true,
      dots: false,
      stagePadding: 10,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      animateIn: true,
      animateOut: true,
      autoplaySpeed: 1000,
      responsive : {
        600: {
          items: 2
        },
        1000: {
          items: 2
        }
      }
  };

  return (
    <div>
      <Header />
      <div className="productContainer">
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
            <OwlCarousel className='owl-theme' {...options}>
              <div class='item'>
              <SingleCard image="/assets/shoe4.svg"/>
              </div>
              <div class='item'>
              <SingleCard image="/assets/shoe5.svg"/>
              </div>
              <div class='item'>
              <SingleCard image="/assets/shoe6.svg"/>
              </div>
              <div class='item'>
              <SingleCard image="/assets/shoe7.svg"/>
              </div>
            </OwlCarousel>
          </div>
          <Products/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForMen;
