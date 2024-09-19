import React from "react";
import styled from "styled-components";
import { useLanguage } from "../../contexts";
import { useTranslation } from "react-i18next";
import { ButtonStyled } from "../CartProduct/styles";
import { Logo } from "../Header/styles";
import { Link } from "react-router-dom";
const FooterContainer = styled.footer`
  box-shadow: 0px 0px 20px 0px #0000001a;
  width: 1110px;
  height: 149px;
  border-radius: 30px 30px 0px 0px;
  background: #ffffff;

  margin: 0 auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LanguageSelector = styled.select`
  padding: 0.5rem;
`;
const SocialLink = styled.a`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;
const PhoneLink = styled.a`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;
const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  margin: 0 20px; // Отступы между колонками
`;
const SiteName = styled.div`
  padding-left: 29px;
  padding-top: 29px;
`;
export const SocialIcons = styled.div`
  width: 126.1px;
  height: 30.1px;
  padding-top: 29px;
  display: flex;
  align-items: center; /* Центрируем по вертикали */
`;
const Footer = () => {
  const { t } = useTranslation();
  const { setLanguage } = useLanguage();

  return (
    <FooterContainer>
      <SiteName>
        <Logo to="/">QPICK</Logo>
      </SiteName>

      <FooterContent>
        <Column>
          <ul>
            <li>
              <Link to="/favourites">{t("favourites")}</Link>
            </li>
            <li>
              <Link to="/cart">{t("cart")}</Link>
            </li>
            <li>
              <Link to="/contacts">{t("contacts")}</Link>
            </li>
          </ul>
        </Column>
        <Column>
          <h2>{t("termsOfService")}</h2>
          <SocialIcons>
            <img src="./assets/globus.png" alt="Иконка глобуса" />
            <ButtonStyled type="button" onClick={() => setLanguage("ru")}>
              Рус
            </ButtonStyled>
            <ButtonStyled type="button" onClick={() => setLanguage("eng")}>
              Eng
            </ButtonStyled>
          </SocialIcons>
        </Column>
      </FooterContent>
      <SocialIcons>
        <SocialLink
          href="https://vk.com/sqrtx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/VK.svg" alt="VK" />
        </SocialLink>
        <SocialLink
          href="https://t.me/fonelor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/Telegram.svg" alt="Telegram" />
        </SocialLink>
        <PhoneLink href="tel:+79805304119">
          <img src="./assets/Whatsapp.svg" alt="Whatsapp" />
        </PhoneLink>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
