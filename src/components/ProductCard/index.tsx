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
import { TypographyOldPrice } from "./styles";
import { addItem } from "../../store/slices/cartSlice";
function Item(props: BoxProps) {
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

const ImageComponent: React.FC<ImageProps> = ({ className, src, alt }) => {
  return <Image className={className} src={src} alt={alt} />;
};

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
        <IconButton onClick={handleOpen} size="small">
          <InfoIcon />
        </IconButton>

        <ProductModal open={open} handleClose={handleClose} product={product} />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "230px",
        }}
      >
        <ImageComponent
          className="my-image"
          src={product.img}
          alt={product.title}
        />
      </Box>

      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">
            {product.title.length > 25
              ? `${product.title.slice(0, 25)}...`
              : product.title}
          </Typography>
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
            <Typography
              variant="h6"
              style={{
                color: "#DAA520",
                marginRight: "0.4rem",
              }}
            >
              {product.price}₽
            </Typography>
            <TypographyOldPrice
              variant="subtitle2"
              className={` single-line`}
              style={{ marginTop: "-0.3rem", color: "#DAA520" }}
            >
              {product.oldPrice ? product.oldPrice + " ₽" : ""}
            </TypographyOldPrice>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "row",
          marginTop: "0.4rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Item>
            <StarIcon style={{ color: "#DAA520" }} />
          </Item>
          <Item>
            <Typography>&nbsp;{product.rate}</Typography>
          </Item>
        </Box>
        <Button variant="text" onClick={handleAddToCart}>
          Купить
        </Button>
      </Box>
    </>
  );
};

export default ProductCard;
