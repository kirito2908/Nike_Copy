import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import BodyPart from "./Components/BodyPart";
import Products from "./Components/Products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <BodyPart />
    <Products />
  </>
);
