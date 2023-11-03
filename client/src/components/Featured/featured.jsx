import React from "react";
import Card from "../Card/Card";
import "./Featured.scss";
import useFetch from "../../hooks/useFetch";

const Featured = ({ type }) => {

  const {data, loading, error} = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featured">
      <div className="top">
        <h1>{type} Products</h1>
      </div>
      <div className="bottom">
        {error ? "Something went wrong!" : (loading ? "loading" : data?.map((item) => (
          <Card item={item} key={item.id} />
        )))}
      </div>
    </div>
  );
};

export default Featured;
