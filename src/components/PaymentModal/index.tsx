import React from "react";
import { Modal, Box, Button, Container, TextField } from "@mui/material";
import { PaymentModalProps } from "./interfaces";

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

const PaymentModal: React.FC<PaymentModalProps> = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Container component="main" maxWidth="sm">
          <h2>Оформление заказа</h2>
          <form>
            <TextField label="Имя" fullWidth margin="normal" required />
            <TextField label="Фамилия" fullWidth margin="normal" required />
            <TextField label="Адрес" fullWidth margin="normal" required />
            <TextField label="Номер карты" fullWidth margin="normal" required />
            <Button variant="contained" color="primary" type="submit">
              Оплатить
            </Button>
          </form>
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            flexDirection: "row",
          }}
        >
          <Button onClick={handleClose}>Закрыть</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PaymentModal;
