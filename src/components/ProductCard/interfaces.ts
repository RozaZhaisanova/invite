export interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}
export interface Product {
  img: string;
  title: string;
  price: number;
  rate: number;
}
export interface ProductCardProps {
  product: Product;
  addToCart: (price: number) => void;
}
