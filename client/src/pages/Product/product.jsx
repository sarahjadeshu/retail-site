import React from "react";
import { useState } from "react";
import "./product.scss";

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);

  const images = [
    "https://images.pexels.com/photos/18829290/pexels-photo-18829290/free-photo-of-a-woman-in-an-orange-coat-and-white-pants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/18696169/pexels-photo-18696169/free-photo-of-a-woman-in-a-green-dress-stands-on-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return <div className="product">
    <div className="left">
      <div className="images">
        <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
        <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
      </div>
      <div className="mainImg">
        <img src={images[selectedImg]} alt="" />
      </div>
    </div>
    <div className="right"></div>
  </div>;
};

export default Product;
