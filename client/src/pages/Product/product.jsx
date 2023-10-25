import React from "react";
import { useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

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
    <div className="right">
      <h1>TITLE</h1>
      <span className="price">$19</span>
      <p>Description</p>
      <div className="quantity">
        <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
        {quantity}
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </div>
      <button className="add">
        <AddShoppingCartIcon /> ADD TO CART
      </button>
      <div className="links">
        <div className="item">
          <FavoriteBorderIcon /> ADD TO WISH LIST
        </div>
        <div className="item">
          <BalanceIcon /> ADD TO COMPARE
        </div>
      </div>
    </div>
  </div>
};

export default Product;
