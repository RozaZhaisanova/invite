import React from "react";
import styled from "styled-components";
import { useLanguage } from "../../contexts";
import { useTranslation } from "react-i18next";
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
const Footer = () => {
  const { t } = useTranslation();
  const { setLanguage } = useLanguage();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  return (
    <FooterContainer>
      <LanguageSelector onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="es">Español</option>
      </LanguageSelector>
      <h1>{t("termsOfService")}</h1>
      <SocialLink
        href="https://t.me/fonelor"
        target="_blank"
        rel="noopener noreferrer"
      >
        Telegram
      </SocialLink>
      <PhoneLink href="tel:+79805304119">+7 (980) 530-4119</PhoneLink>
    </FooterContainer>
  );
};

export default Footer;
