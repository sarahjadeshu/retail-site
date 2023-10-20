import React from "react";
import Slider from "../../components/Slider/slider";
import Featured from "../../components/Featured/featured";
import Categories from "../../components/Categories/categories";
import "./home.scss"

const Home = () => {
    return (
      <div className="home">
        <Slider />
        <Featured type="featured" />
        <Categories />
        <Featured type="trending" />
      </div>
    );
};

export default Home;