import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
import { removeItem } from "../../redux/cartReducer";
import { resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  }

    return (
      <div className="cart">
        <h1>Cart</h1>
        {products?.map((item) => (
          <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">{item.quantity} x ${item.price}</div>
            </div>
            <DeleteOutlinedIcon className="delete" onClick={() => dispatch(removeItem(item.id))}/>
          </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>${totalPrice()}</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={() => dispatch(resetCart())}>EMPTY CART</span>
      </div>
    );
};

export default Cart;