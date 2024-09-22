import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import {
  CardStyled,
  CatalogTitle,
  ContainerStyled,
  ProductGrid,
} from "./styles";
import CardContent from "@mui/material/CardContent";
import { getHeadphones } from "../../lib/api";
import { Product } from "../../lib/types";
import { useTranslation } from "react-i18next";
export const ProductList = () => {
  const [headphones, setHeadphones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
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
  if (isLoading) {
    return (
      <ContainerStyled>
        <CatalogTitle> Loading</CatalogTitle>
      </ContainerStyled>
    );
  }
  return (
    <ContainerStyled>
      {wired.length > 0 && (
        <>
          <CatalogTitle> {t("headphones")}</CatalogTitle>
          <ProductGrid>
            {wired.map((product) => (
              <CardStyled key={product.id}>
                <CardContent>
                  <ProductCard product={product} />
                </CardContent>
              </CardStyled>
            ))}
          </ProductGrid>
        </>
      )}
      {wireless.length > 0 && (
        <>
          <CatalogTitle>{t("wirelessHeadphones")}</CatalogTitle>
          <ProductGrid>
            {wireless.map((product) => (
              <CardStyled key={product.id}>
                <CardContent>
                  <ProductCard product={product} />
                </CardContent>
              </CardStyled>
            ))}
          </ProductGrid>
        </>
      )}
    </ContainerStyled>
  );
};
