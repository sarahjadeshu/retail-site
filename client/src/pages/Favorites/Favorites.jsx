import React from "react";
import "./Favorites.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";

const Favorites = () => {
    const catId = parseInt(useParams().id);

    return (
        <div className="favorites">
            <div className="title">
                <h1>Wishlist</h1>
            </div>
            <div className="items">
                Display Items Here
            </div>
        </div>
    )
}

export default Favorites;