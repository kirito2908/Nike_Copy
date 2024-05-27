import React from 'react'
import { Header } from './Header'
import Footer from "./Footer";
import AboutPart1 from './AboutPart/AboutPart1.jsx';
import AboutPart2 from './AboutPart/AboutPart2.jsx';
import AboutPart3 from './AboutPart/AboutPart3.jsx';

const About = () => {
  return (
    <div>
        <Header/>
          <AboutPart1/>
          <AboutPart2/>
          <AboutPart3/>
        <Footer/>
    </div>
  )
}

export default About
