import { useLanguage } from "../../contexts";
import { useTranslation } from "react-i18next";
import { ButtonStyled } from "../CartProduct/styles";
import { Logo } from "../Header/styles";
import {
  FooterContainer,
  SiteName,
  FooterContent,
  Column,
  StyledList,
  StyledListItem,
  FooterLink,
  StyledTypography,
  SocialIcons,
  SocialLink,
  PhoneLink,
  Lang,
  ColumnRight,
} from "./styles";

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
          <StyledList>
            <StyledListItem>
              <FooterLink to="/favourites">{t("favourites")}</FooterLink>
            </StyledListItem>
            <StyledListItem>
              <FooterLink to="/cart">{t("cart")}</FooterLink>
            </StyledListItem>
            <StyledListItem>
              <FooterLink to="/contacts">{t("contacts")}</FooterLink>
            </StyledListItem>
          </StyledList>
        </Column>
        <ColumnRight>
          <StyledTypography>{t("termsOfService")}</StyledTypography>
          <Lang>
            <img src="./assets/globus.png" alt="Иконка глобуса" />
            <ButtonStyled type="button" onClick={() => setLanguage("ru")}>
              Рус
            </ButtonStyled>
            <ButtonStyled type="button" onClick={() => setLanguage("eng")}>
              Eng
            </ButtonStyled>
          </Lang>
        </ColumnRight>
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
