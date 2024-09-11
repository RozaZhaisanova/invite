import React, { useState } from "react";
import styled from "styled-components";
import { ImageProps, ProductCardProps } from "./interfaces";
import { useCart } from "../../contexts/CartContext";
import { CardMedia, CardActions, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import Box, { BoxProps } from "@mui/material/Box";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ProductModal from "../ProductModal";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={[
        (theme) => ({
          color: "grey.800",
          borderRadius: 1,
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

  const { addToCart } = useCart();

  return (
    <>
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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h6">{product.title}</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Item>
              <StarIcon style={{ color: "#DAA520" }} />
            </Item>
            <Item>
              <Typography>{product.rate}</Typography>
            </Item>
          </Box>
        </div>

        <div style={{ textAlign: "right" }}>
          <Typography variant="h6" style={{ color: "#DAA520" }}>
            {product.price}₽
          </Typography>
          <CardActions>
            <Button variant="text" onClick={() => addToCart(product)}>
              Купить
            </Button>
          </CardActions>
        </div>
      </Box>

      <div>
        <IconButton onClick={handleOpen}>
          <InfoIcon />
        </IconButton>

        <ProductModal open={open} handleClose={handleClose} product={product} />
      </div>
    </>
  );
};

export default ProductCard;
