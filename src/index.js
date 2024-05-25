import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ForMen from "./Components/ForMen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/catagory/men" element={<ForMen/>}/>
        {/* <Route path="/catagory/women" element={<ForWomen/>}/>
        <Route path="/catagory/kids" element={<ForKids/>}/> */}
      </Routes>
    </BrowserRouter>
  </>
);
