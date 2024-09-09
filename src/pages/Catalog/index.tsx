import React from "react";
import ProductList from "../../components/ProductList";

const Catalog = () => (
  <>
    <h1>Catalog</h1>
    <ProductList
      addToCart={function (price: number): void {
        throw new Error("Function not implemented.");
      }}
    />
  </>
);

export default Catalog;
