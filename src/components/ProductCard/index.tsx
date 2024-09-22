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
  ProductCardStar,
  ProductCardTitleAndPrice,
  ProductCardPriceBox,
  ProductCardFooter,
} from "./styles";
import { increaseQuantity, addItem } from "../../store/slices/cartSlice";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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
  const [inCart, setInCart] = useState(false);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    if (!inCart) {
      const { title, img, price } = product;
      dispatch(addItem({ title, img, price, quantity: 1 }));
      setInCart(true);
    }
  };

  return (
    <>
      <div style={{ textAlign: "right" }}>
        <IconButton onClick={handleOpen} size="small" color="primary">
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
        <ProductCardTitleAndPrice>
          <ProductCardTitle>
            {product.title.length > 20
              ? `${product.title.slice(0, 20)}...`
              : product.title}
          </ProductCardTitle>

          <ProductCardPriceBox>
            <ProductCardPrice>{product.price}₽</ProductCardPrice>
            <ProductCardOldPrice>
              {product.oldPrice ? product.oldPrice + " ₽" : ""}
            </ProductCardOldPrice>
          </ProductCardPriceBox>
        </ProductCardTitleAndPrice>
        <ProductCardFooter>
          <ProductCardStar>
            <Item>
              <img src="./assets/star.png" alt="Star" />
            </Item>
            <Item>
              <ProductRate>{product.rate}</ProductRate>
            </Item>
          </ProductCardStar>
          {inCart ? (
            <ProductCardBuy onClick={() => navigate("/cart")}>
              <ProductCardBuyTitle>{t("inCart")}</ProductCardBuyTitle>
            </ProductCardBuy>
          ) : (
            <ProductCardBuy onClick={handleAddToCart}>
              <ProductCardBuyTitle>{t("buy")}</ProductCardBuyTitle>
            </ProductCardBuy>
          )}
        </ProductCardFooter>
      </DivStyled>
    </>
  );
};

export default ProductCard;
