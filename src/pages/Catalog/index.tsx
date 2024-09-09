import React, { useState } from "react";
import { ProductList } from "../../components/ProductList";

const Catalog: React.FC = () => {
  return (
    <div className="catalog">
      <ProductList />
    </div>
  );
};

export default Catalog;
