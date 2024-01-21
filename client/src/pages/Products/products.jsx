import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./products.scss";

// Not displaying products at times (when filtering), need to fix

const Products = () => {

const catId = parseInt(useParams().id);
const [maxPrice, setMaxPrice] = useState(1000);
const [sort, setSort] = useState(null);
const [selectedSubCats, setSelectedSubCats] = useState([]);

const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

const handleChange = (event) => {
  const value = event.target.value;
  const isChecked = event.target.checked;

  setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value))
};

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input 
                type="checkbox" 
                id={item.id} 
                value={item.id} 
                onChange={handleChange} 
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Low to high)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (High to low)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/11629784/pexels-photo-11629784.jpeg"
          alt="Orange wild flowers against white background"
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  );
};

export default Products;
