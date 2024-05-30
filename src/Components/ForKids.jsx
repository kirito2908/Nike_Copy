import React from "react";
import SingleCard from "./SingleCard";
import { Header } from "./Header";
import Footer from "./Footer";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Products from "./Products";

const ForKids = () => {

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
    <>
      <Header/>
        <div className="productContainer">
          <div className="mainContainer">
            <div className="textPart">
              <h2>
                Our <span>Kids's</span> Products
              </h2>
              <p>
                Experience top-notch quality and style with our sought-after
                selections. Discover a world of comfort, design, and value
              </p>
            </div>
            <div className="cardPart">
            <OwlCarousel className='owl-theme' {...options}>
              <div className='item'>
              <SingleCard image="/assets/dunk-low-big-kids.png"/>
              </div>
              <div className='item'>
              <SingleCard image="/assets/jordan-1-retro-high.png"/>
              </div>
              <div className='item'>
              <SingleCard image="/assets/jordan-12.png"/>
              </div>
              <div className='item'>
              <SingleCard image="/assets/air-jordan-12.png"/>
              </div>
            </OwlCarousel>
          </div>
          <Products/>
          </div>
        </div>
        <Footer/>
    </>
  );
};

export default ForKids;
