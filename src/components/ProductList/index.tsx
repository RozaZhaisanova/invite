import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { ProductGrid } from "./styles";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import { getHeadphones } from "../../lib/api";
import { Product } from "../../lib/types";

export const ProductList = () => {
  const [headphones, setHeadphones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHeadphones = async () => {
      setIsLoading(true);
      const fetchedHeadphones = await getHeadphones();
      setHeadphones(fetchedHeadphones);
      setIsLoading(false);
    };
    fetchHeadphones();
  }, []);
  const wired = headphones.filter((product) => product.type === "wired");
  const wireless = headphones.filter((product) => product.type === "wireless");
  return (
    <Container component="main" maxWidth="lg">
      <>
        {wired.length > 0 && (
          <>
            <h2 className="titlePage"> Наушники</h2>
            <div className="products__list wired__list">
              <ProductGrid>
                {wired.map((product) => (
                  <Card
                    key={product.id}
                    sx={{
                      height: "370px",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 5,
                    }}
                  >
                    <CardContent>
                      <ProductCard product={product} />
                    </CardContent>
                  </Card>
                ))}
              </ProductGrid>
            </div>
          </>
        )}
        {wireless.length > 0 && (
          <>
            <h2 className="titlePage">Беспроводные наушники</h2>
            <div className="products__list wireless__list">
              <ProductGrid>
                {wireless.map((product) => (
                  <Card
                    key={product.id}
                    sx={{
                      height: "370px",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 4,
                    }}
                  >
                    <CardContent>
                      <ProductCard product={product} />
                    </CardContent>
                  </Card>
                ))}
              </ProductGrid>
            </div>
          </>
        )}
      </>
    </Container>
  );
};
