import React from "react";
import Slider from "../../components/Slider/slider";
import Featured from "../../components/Featured/featured";
import Categories from "../../components/Categories/categories";
import Contact from "../../components/Contact/contact";
import "./home.scss"

const Home = () => {
    return (
      <div className="home">
        <Slider />
        <Featured type="featured" />
        <Categories />
        <Featured type="trending" />
        <Contact />
      </div>
    );
};

export default Home;