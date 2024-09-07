import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
export const ProductCard = ({
  product,
}: {
  product: { img: string; title: string; price: number; rate: number };
}) => (
  <Card>
    <Image src={product.img} alt={product.title} />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <p>Rating: {product.rate}</p>
    <button>Add to Cart</button>
  </Card>
);

export default ProductCard;
