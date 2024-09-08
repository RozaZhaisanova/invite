import React from "react";
import styled from "styled-components";
interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}
const ImageComponent: React.FC<ImageProps> = ({ className, src, alt }) => {
  return <Image className={className} src={src} alt={alt} />;
};
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
  max-height: 100%;
`;
export const ProductCard = ({
  product,
}: {
  product: { img: string; title: string; price: number; rate: number };
}) => (
  <Card>
    <ImageComponent
      className="my-image"
      src={product.img}
      alt={product.title}
    />
    <h3>{product.title}</h3>
    <p>${product.price}</p>
    <p>Rating: {product.rate}</p>
  </Card>
);

export default ProductCard;
