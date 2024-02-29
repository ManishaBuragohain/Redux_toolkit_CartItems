import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo ">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>

        <Link to="/cart" className="navLink">
          Cart
        </Link>
        <span className="cartCount">cart items :0</span>
      </div>
    </div>
  );
};

export default Navbar;
