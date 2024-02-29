import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        console.log("data response....", data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} />
          <p>{product.title}</p>
          <p>{product.price}</p>
          <button className="btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
