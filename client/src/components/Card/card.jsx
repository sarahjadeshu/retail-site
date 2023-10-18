import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({item}) => {
    return (
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    <img src="{item.img}" alt="Image of product" className="mainImg" />
                    <img src="{item.img2}" alt="Image of product after hover" className="secondImg" />
                </div>
                <h2>{item.title}</h2>
                <div className="prices">
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.price}</h3>
                </div>
            </div>
        </Link>
    )
};

export default Card;