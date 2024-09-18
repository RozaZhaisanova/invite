import React from "react";
import styled from "styled-components";
import { useLanguage } from "../../contexts";
import { useTranslation } from "react-i18next";
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #2a4580;
  border-top: 1px solid #ddd;
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
