import React from "react";
import { UseSelector, useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  return (
    <div>
      <h3>Cart Details</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCount">
            <img src={product.image} alt="cartImage" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn">remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
