export interface Product {
  type: string;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  id: number;
}
export interface CartProduct {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}
