import React from "react";
import Card from "../Card/Card";
import "./featured.scss";

const Featured = ({type}) => {

    const data = [
      {
        id: 1,
        img: "https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg",
        title: "Floral Dress",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
      {
        id: 3,
        img: "https://images.pexels.com/photos/2820582/pexels-photo-2820582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Skirt",
        oldPrice: 19,
        price: 12,
      },
      {
        id: 4,
        img: "https://images.pexels.com/photos/1624248/pexels-photo-1624248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Hat",
        oldPrice: 19,
        price: 12,
      },
    ];

    return (
        <div className="featured">
            <div className="top">
                <h1>{type} Products</h1>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
};

export default Featured;