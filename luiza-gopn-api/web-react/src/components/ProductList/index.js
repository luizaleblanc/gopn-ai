import React from "react";
import { useAuth } from "../../context/AuthContext";
import ProductCard from "./ProductCard";
const ProductList = () => {
  const { products } = useAuth();
  const ProductsList = () => {
    if (products.length > 0) {
      return (
        <ul className="w-full h-3/4 overflow-x-auto flex flex-col gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      );
    } else {
      return <ul className="w-full h-3/4 overflow-x-auto flex flex-col gap-5"></ul>;
    }
  };
  return <ProductsList />;
};
export default ProductList;
