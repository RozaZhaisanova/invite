import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { CardStyled, ProductGrid } from "./styles";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
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
                  <CardStyled key={product.id}>
                    <CardContent>
                      <ProductCard product={product} />
                    </CardContent>
                  </CardStyled>
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
                  <CardStyled key={product.id}>
                    <CardContent>
                      <ProductCard product={product} />
                    </CardContent>
                  </CardStyled>
                ))}
              </ProductGrid>
            </div>
          </>
        )}
      </>
    </Container>
  );
};
