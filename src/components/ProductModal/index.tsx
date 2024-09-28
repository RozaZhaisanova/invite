import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { ProductModalProps } from "./interfaces";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: { xs: 1, sm: 3, md: 4 },
  width: "90%",
};

const ProductModal: React.FC<ProductModalProps> = ({
  open,
  handleClose,
  product,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6">{product.title}</Typography>
        <Typography>Цена: {product.price}</Typography>

        <Typography>Рейтинг: {product.rate}</Typography>
        <Button
          sx={{ marginTop: "20px" }}
          onClick={handleClose}
          variant="outlined"
        >
          Закрыть
        </Button>
      </Box>
    </Modal>
  );
};

export default ProductModal;
