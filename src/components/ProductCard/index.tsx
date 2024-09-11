import React from "react";
import styled from "styled-components";
import { ImageProps, ProductCardProps } from "./interfaces";
import { useCart } from "../../contexts/CartContext";
import { CardActions, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import Box, { BoxProps } from "@mui/material/Box";

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
const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <>
      <ImageComponent
        className="my-image"
        src={product.img}
        alt={product.title}
      />
      <Typography variant="h6">{product.title}</Typography>
      <Typography variant="h6" style={{ color: "#DAA520" }}>
        {product.price}₽
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Item>
          <StarIcon style={{ color: "#DAA520" }} />
        </Item>
        <Item>
          <Typography>{product.rate}</Typography>
        </Item>
      </Box>

      <CardActions>
        <Button
          onClick={() => addToCart(product)}
          size="small"
          variant="contained"
          color="secondary"
        >
          Купить
        </Button>
      </CardActions>
    </>
  );
};

export default ProductCard;
