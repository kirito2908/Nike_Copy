import React from "react";
import { Rate } from "antd";

const SingleCard = (dets) => {
  return (
    <div className="info">
      <img src={dets.image} alt="Shoe4"/>
      <div className="details">
        <div className="rating">
          {dets.rate}
          <p>{dets.rating}</p>
        </div>
        <h3>{dets.version}</h3>
        <p className="price">{dets.price}</p>
      </div>
    </div>
  );
};

export default SingleCard;
