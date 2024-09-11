import { Product } from "../../lib/types";

export interface ProductModalProps {
  open: boolean;
  handleClose: () => void;
  product: Product;
}
