import { Product } from "../../lib/types";

export interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

export interface ProductCardProps {
  product: Product;
}
