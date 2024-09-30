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
  SocialIcons,
  SocialLink,
  ColumnRight,
  SelectedButtonStyled,
  MobSocialIcons,
  LangSelector,
  MobFooterContainer,
  MobFooterContent,
  MobStyledList,
  MobStyledListItem,
  LanguageTitle,
} from "./styles";
import i18n from "../../contexts/i18n";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const { t } = useTranslation();
  const { setLanguage } = useLanguage();
  const selectedLanguage = i18n.language;
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {!isMobile ? (
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
              <StyledListItem>
                <FooterLink to="/termsOfService">
                  {t("termsOfService")}
                </FooterLink>
              </StyledListItem>
              <LangSelector>
                <img src="./assets/globus.png" alt="Иконка глобуса" />
                {selectedLanguage === "ru" ? (
                  <>
                    <SelectedButtonStyled
                      type="button"
                      onClick={() => setLanguage("ru")}
                    >
                      <LanguageTitle>Рус</LanguageTitle>
                    </SelectedButtonStyled>
                    <ButtonStyled
                      type="button"
                      onClick={() => setLanguage("eng")}
                    >
                      <LanguageTitle>Eng</LanguageTitle>
                    </ButtonStyled>
                  </>
                ) : (
                  <>
                    <ButtonStyled
                      type="button"
                      onClick={() => setLanguage("ru")}
                    >
                      <LanguageTitle>Рус</LanguageTitle>
                    </ButtonStyled>
                    <SelectedButtonStyled
                      type="button"
                      onClick={() => setLanguage("en")}
                    >
                      <LanguageTitle>Eng</LanguageTitle>
                    </SelectedButtonStyled>
                  </>
                )}
              </LangSelector>
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
            <SocialLink href="tel:+79805304119">
              <img src="./assets/Whatsapp.svg" alt="Whatsapp" />
            </SocialLink>
          </SocialIcons>
        </FooterContainer>
      ) : (
        <MobFooterContainer>
          <MobSocialIcons>
            <SocialLink
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VK"
            >
              <img src="./assets/VK.svg" alt="VK" />
            </SocialLink>
            <SocialLink
              href="https://t.me/fonelor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <img src="./assets/Telegram.svg" alt="Telegram" />
            </SocialLink>
            <SocialLink href="tel:+79805304119" aria-label="WhatsApp">
              <img src="./assets/Whatsapp.svg" alt="WhatsApp" />
            </SocialLink>
          </MobSocialIcons>

          <LangSelector>
            <img src="./assets/globus.png" alt="Иконка глобуса" />
            {selectedLanguage === "ru" ? (
              <>
                <SelectedButtonStyled
                  type="button"
                  onClick={() => setLanguage("ru")}
                >
                  <LanguageTitle>Рус</LanguageTitle>
                </SelectedButtonStyled>
                <ButtonStyled type="button" onClick={() => setLanguage("eng")}>
                  <LanguageTitle>Eng</LanguageTitle>
                </ButtonStyled>
              </>
            ) : (
              <>
                <ButtonStyled type="button" onClick={() => setLanguage("ru")}>
                  <LanguageTitle>Рус</LanguageTitle>
                </ButtonStyled>
                <SelectedButtonStyled
                  type="button"
                  onClick={() => setLanguage("en")}
                >
                  <LanguageTitle>Eng</LanguageTitle>
                </SelectedButtonStyled>
              </>
            )}
          </LangSelector>

          <MobFooterContent>
            <Column>
              <MobStyledList>
                <MobStyledListItem>
                  <FooterLink to="/favourites">{t("favourites")}</FooterLink>
                </MobStyledListItem>
                <MobStyledListItem>
                  <FooterLink to="/cart">{t("cart")}</FooterLink>
                </MobStyledListItem>
                <MobStyledListItem>
                  <FooterLink to="/contacts">{t("contacts")}</FooterLink>
                </MobStyledListItem>
                <br />
                <FooterLink to="/termsOfService">
                  {t("termsOfService")}
                </FooterLink>
              </MobStyledList>
            </Column>
            <SiteName>
              <Logo to="/">QPICK</Logo>
            </SiteName>
          </MobFooterContent>
        </MobFooterContainer>
      )}
    </>
  );
};

export default Footer;
