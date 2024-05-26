import React from 'react'
import { Header } from './Header'
import Footer from "./Footer";
import AboutPart1 from './AboutPart1';
import AboutPart2 from './AboutPart2';
import AboutPart3 from './AboutPart3';

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
