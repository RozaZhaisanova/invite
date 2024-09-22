import React, { useState } from "react";
import styled from "styled-components";
import { ImageProps, ProductCardProps } from "./interfaces";
import { useDispatch } from "react-redux";
import { CardMedia, CardActions, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import Box, { BoxProps } from "@mui/material/Box";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ProductModal from "../ProductModal";
import {
  ProductCardBuyTitle,
  ProductCardOldPrice,
  ProductCardPrice,
  ProductCardBuy,
  ProductCardTitle,
  ProductRate,
} from "./styles";
import { addItem } from "../../store/slices/cartSlice";
import { useTranslation } from "react-i18next";

import { DivStyled } from "./styles";
export function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={[
        (theme) => ({
          color: "grey.800",
          fontSize: "0.875rem",
          fontWeight: "700",
          ...theme.applyStyles("dark", {
            color: "grey.300",
          }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    />
  );
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const { title, img, price } = product;
    dispatch(addItem({ title, img, price, quantity: 1 }));
  };

  return (
    <>
      <div style={{ textAlign: "right" }}>
        <IconButton onClick={handleOpen} size="small" color="secondary">
          <InfoIcon />
        </IconButton>

        <ProductModal open={open} handleClose={handleClose} product={product} />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "237.07px",
        }}
      >
        <img src={product.img} alt={product.title} />
      </Box>
      <DivStyled>
        <Box
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <ProductCardTitle>
              {product.title.length > 25
                ? `${product.title.slice(0, 25)}...`
                : product.title}
            </ProductCardTitle>
          </Box>

          <Box
            sx={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <ProductCardPrice>{product.price}₽</ProductCardPrice>
              <ProductCardOldPrice>
                {product.oldPrice ? product.oldPrice + " ₽" : ""}
              </ProductCardOldPrice>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Item>
              <img src="./assets/star.png" alt="Star" />
            </Item>
            <Item>
              <ProductRate>{product.rate}</ProductRate>
            </Item>
          </Box>
          <ProductCardBuy onClick={handleAddToCart}>
            <ProductCardBuyTitle>{t("buy")}</ProductCardBuyTitle>
          </ProductCardBuy>
        </Box>
      </DivStyled>
    </>
  );
};

export default ProductCard;
