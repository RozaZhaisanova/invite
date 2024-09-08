import React from "react";
import ProductCard from "../ProductCard";
import { ProductGrid } from "./styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";

const headphones = [
  {
    img: "./assets/1.jpg",
    title: "Apple BYZ S852I",
    price: 2927,
    rate: 4.7,
  },
  {
    img: "./assets/2.jpg",
    title: "Sony WH-1000XM4",
    price: 3499,
    rate: 4.8,
  },
  {
    img: "./assets/3.jpg",
    title: "Bose QuietComfort 35 II",
    price: 2999,
    rate: 4.6,
  },
  {
    img: "./assets/4.jpg",
    title: "Huawei pura 70",
    price: 2879,
    rate: 4.3,
  },
  {
    img: "./assets/5.jpg",
    title: "JBL Tune 510WS",
    price: 2920,
    rate: 4.4,
  },
  {
    img: "./assets/6.png",
    title: "JBL T110",
    price: 3489,
    rate: 4.8,
  },
  {
    img: "./assets/7.jpg",
    title: "Tune 225 tws",
    price: 3999,
    rate: 4.9,
  },
  {
    img: "./assets/8.jpg",
    title: "Tune 120 TWS",
    price: 3879,
    rate: 4.2,
  },
  {
    img: "./assets/9.jpg",
    title: "AirPods pro",
    price: 3920,
    rate: 4.4,
  },
];

const ProductList = () => (
  <Container component="main" maxWidth="lg">
    <ProductGrid>
      {headphones.map((product, index) => (
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            bgcolor: "primary.contrastText",
          }}
        >
          <ProductCard key={index} product={product} />
          <CardActions>
            <Button size="small" variant="outlined">
              Зарегистрироваться
            </Button>
          </CardActions>
        </Card>
      ))}
    </ProductGrid>
  </Container>
);

export default ProductList;
