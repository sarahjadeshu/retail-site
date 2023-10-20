import React from "react";
import { Link } from "react-router-dom";
import "./categories.scss";

const Categories = () => {
    return (
      <div className="categories">
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/1858488/pexels-photo-1858488.jpeg"
              alt="Person wearing yellow coat holding pink flower"
            />
            <button>
                <Link className="link" to="/products/1">Sale</Link>
            </button>
          </div>
          <div className="row">r2</div>
        </div>
        <div className="col">
          <div className="row">r3</div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">r4</div>
            </div>
            <div className="col">
              <div className="row">r5</div>
            </div>
          </div>
          <div className="row">r6</div>
        </div>
      </div>
    );
};

export default Categories;