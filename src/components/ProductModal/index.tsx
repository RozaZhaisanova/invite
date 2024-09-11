import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { ProductModalProps } from "./interfaces";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
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
        <Typography sx={{ mt: 2 }}>{product.rate}</Typography>
        <Button onClick={handleClose} variant="outlined">
          Закрыть
        </Button>
      </Box>
    </Modal>
  );
};

export default ProductModal;
