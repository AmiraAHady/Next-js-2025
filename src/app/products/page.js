import React from "react";

const Page = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return (
    <>
      {products.map((prod) => (
        <div key={prod.id}>
          <h1>{prod.title}</h1>
          <p>{prod.description}</p>
          <h3>{prod.price}$</h3>
        </div>
      ))}
    </>
  );
};

export default Page;
