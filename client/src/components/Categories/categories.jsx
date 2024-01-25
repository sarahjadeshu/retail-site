import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
    return (
      <div className="categories">
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/1858488/pexels-photo-1858488.jpeg"
              alt="Person wearing yellow coat and holding pink flower"
            />
            <button>
              <Link className="link" to="/products/1">
                Sale
              </Link>
            </button>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/3328128/pexels-photo-3328128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Khaki robe with brown plaid pants"
            />
            <button>
              <Link className="link" to="/products/1">
                Women
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/3419692/pexels-photo-3419692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman wearing pleated silver dress celebrating with confetti and balloons"
            />
            <button>
              <Link className="link" to="/products/1">
                New Season
              </Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/2899935/pexels-photo-2899935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Man standing in long grass wearing black and white contrast blazer coat"
                />
                <button>
                  <Link className="link" to="/products/2">
                    Men
                  </Link>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Gold necklaces surrounded by beige fabric and pink flowers"
                />
                <button>
                  <Link className="link" to="/products/1">
                    Accessories
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/12750409/pexels-photo-12750409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Person wearing black polka dot dress holding green pointed toe heels"
            />
            <button>
              <Link className="link" to="/products/1">
                Shoes
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Categories;