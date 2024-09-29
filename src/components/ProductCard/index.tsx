import React, { useState } from "react";
import { ProductCardProps } from "./interfaces";
import { useDispatch } from "react-redux";
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
  ProductCardInCartTitle,
} from "./styles";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/slices/cartSlice";
import { addItem } from "../../store/slices/cartSlice";
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
  const cartItems = useSelector(selectCartItems);
  const isCardInCart = cartItems.some((item) => item.title === product.title);

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    const { title, img, price } = product;
    dispatch(addItem({ title, img, price, quantity: 1 }));
  };

  return (
    <>
      <div style={{ textAlign: "right" }}>
        <IconButton
          onClick={handleOpen}
          size="small"
          color="primary"
          edge="end"
        >
          <InfoIcon />
        </IconButton>

        <ProductModal open={open} handleClose={handleClose} product={product} />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "210px", lg: "237.07px" },
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
          {isCardInCart ? (
            <ProductCardBuy onClick={() => navigate("/cart")}>
              <ProductCardInCartTitle>{t("inCart")}</ProductCardInCartTitle>
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
