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
  ColumnRight,
  SelectedButtonStyled,
  MobSocialIcons,
  LangSelector,
  MobFooterContainer,
  MobFooterContent,
  MobPhoneLink,
  MobSocialLink,
  MobStyledList,
  MobStyledListItem,
} from "./styles";
import i18n from "../../contexts/i18n";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";

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
              <StyledTypography>{t("termsOfService")}</StyledTypography>
              <LangSelector>
                <img src="./assets/globus.png" alt="Иконка глобуса" />
                {selectedLanguage === "ru" ? (
                  <>
                    <SelectedButtonStyled
                      type="button"
                      onClick={() => setLanguage("ru")}
                    >
                      Рус
                    </SelectedButtonStyled>
                    <ButtonStyled
                      type="button"
                      onClick={() => setLanguage("eng")}
                    >
                      Eng
                    </ButtonStyled>
                  </>
                ) : (
                  <>
                    <ButtonStyled
                      type="button"
                      onClick={() => setLanguage("ru")}
                    >
                      Рус
                    </ButtonStyled>
                    <SelectedButtonStyled
                      type="button"
                      onClick={() => setLanguage("en")}
                    >
                      Eng
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
            <PhoneLink href="tel:+79805304119">
              <img src="./assets/Whatsapp.svg" alt="Whatsapp" />
            </PhoneLink>
          </SocialIcons>
        </FooterContainer>
      ) : (
        <MobFooterContainer>
          <MobSocialIcons>
            <MobSocialLink
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VK"
            >
              <img src="./assets/VK.svg" alt="VK" />
            </MobSocialLink>
            <MobSocialLink
              href="https://t.me/fonelor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <img src="./assets/Telegram.svg" alt="Telegram" />
            </MobSocialLink>
            <MobPhoneLink href="tel:+79805304119" aria-label="WhatsApp">
              <img src="./assets/Whatsapp.svg" alt="WhatsApp" />
            </MobPhoneLink>
          </MobSocialIcons>

          <LangSelector>
            <img src="./assets/globus.png" alt="Иконка глобуса" />
            {selectedLanguage === "ru" ? (
              <>
                <SelectedButtonStyled
                  type="button"
                  onClick={() => setLanguage("ru")}
                >
                  Рус
                </SelectedButtonStyled>
                <ButtonStyled type="button" onClick={() => setLanguage("eng")}>
                  Eng
                </ButtonStyled>
              </>
            ) : (
              <>
                <ButtonStyled type="button" onClick={() => setLanguage("ru")}>
                  Рус
                </ButtonStyled>
                <SelectedButtonStyled
                  type="button"
                  onClick={() => setLanguage("en")}
                >
                  Eng
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
