export interface Product {
  type: string;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  id: number;
}
export interface ICartProduct {
  title: string;
  img: string;
  price: number;
  quantity: number;
}

export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}
