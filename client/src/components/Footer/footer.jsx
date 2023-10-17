import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Handmade jewelry and accessories. Crafted with care and love in
            California.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Questions? Feel free to email us at ohhecksarah@gmail.com.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">OH HECK SHOP</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="Payment information" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
