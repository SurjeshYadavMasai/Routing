import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
        (d) => d.json()
      );
      setProduct(data);
    }
    getData();
  }, []);
  console.log(product);
  return (
    <div
      style={{
        margin: "auto",
        border: "2px solid grey",
        width: "60%",
        backgroundColor: "grey",
        borderRadius: "20px",
      }}
    >
      <img
        style={{ width: "200px", height: "200px" }}
        src={product.image}
        alt=""
      />
      <h1>{product.category}</h1>
      <h3>{product.title}</h3>
      <h5>{product.price} Rs.</h5>
      <Link to="/products">
        <button
          style={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "20px",
          }}
        >
          {" "}
          Go Back
        </button>
      </Link>
    </div>
  );
}
