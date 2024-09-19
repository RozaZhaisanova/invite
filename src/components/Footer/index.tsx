import React from "react";
import styled from "styled-components";
import { useLanguage } from "../../contexts";
import { useTranslation } from "react-i18next";
import { ButtonStyled } from "../CartProduct/styles";
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
  align-items: center;
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
const SiteName = styled.img`
  padding-left: 29px;
  padding-top: 29px;
`;
const Footer = () => {
  const { t } = useTranslation();
  const { setLanguage } = useLanguage();

  return (
    <FooterContainer>
      <SiteName src="./assets/QPICK.png" alt="qpick" />

      <FooterContent>
        <Column></Column>
        <Column>
          <h2>{t("termsOfService")}</h2>
          <div>
            <img src="./assets/globus.png" alt="Иконка глобуса" />
            <ButtonStyled type="button" onClick={() => setLanguage("ru")}>
              Рус
            </ButtonStyled>
            <ButtonStyled type="button" onClick={() => setLanguage("eng")}>
              Eng
            </ButtonStyled>
          </div>
        </Column>
      </FooterContent>
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
    </FooterContainer>
  );
};

export default Footer;
