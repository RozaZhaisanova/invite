import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { ProductGrid } from "./styles";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import { getHeadphones } from "../../lib/api";
import { Product } from "../../lib/types";

export const ProductList = () => {
  const [headphones, setHeadphones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHeadphones = async () => {
      setIsLoading(true);
      const fetchedUsers = await getHeadphones();
      setHeadphones(fetchedUsers);
      setIsLoading(false);
    };
    fetchHeadphones();
  }, []);
  return (
    <Container component="main" maxWidth="lg">
      <ProductGrid>
        {headphones.map((product) => (
          <Card
            key={product.id}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent>
              <ProductCard product={product} />
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="secondary">
                Купить
              </Button>
            </CardActions>
          </Card>
        ))}
      </ProductGrid>
    </Container>
  );
};
