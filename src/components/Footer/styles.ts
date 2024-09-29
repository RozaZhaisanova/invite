import { Link } from "react-router-dom";
import styled from "styled-components";
export const MobFooterContainer = styled.footer`
  padding: 20px;
  background-color: #a0a0a0;
  color: white;
  text-align: center;
`;

export const MobSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  & a {
    margin: 0 10px;
  }
`;

export const MobSocialLink = styled.a`
  img {
    width: 24px;
    height: 24px;
  }
`;

export const MobPhoneLink = styled.a`
  img {
    width: 24px;
    height: 24px;
  }
`;

export const MobFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Column = styled.div`
  margin-bottom: 10px;
`;

export const MobStyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const MobStyledListItem = styled.li`
  margin: 5px 0;
`;

export const MobFooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const MobSiteName = styled.div`
  margin-top: 10px;
`;

export const MobLogo = styled(Link)`
  font-size: 24px;
  color: white;
`;

export const MobStyledTypography = styled.p`
  font-size: 12px;
`;
export const FooterContainer = styled.footer`
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
  @media (max-width: 1160px) {
    max-width: 100%;
    overflow: hidden;
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: #007bff;
  &:hover {
    opacity: 0.7;
  }
`;

export const PhoneLink = styled.a`
  text-decoration: none;
  color: #007bff;

  &:hover {
    opacity: 0.7;
  }
`;
export const FooterContent = styled.div`
  @media (min-width: 579px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 427px;
    height: 100%;
  }
  @media (max-width: 860px) {
    max-width: 300px;
    overflow: hidden;
  }
`;
export const ColumnRight = styled.div`
  margin-bottom: 17px;
`;
export const SiteName = styled.div`
  padding-left: 29px;
  padding-top: 29px;
  @media (max-width: 599px) {
    padding-top: 0px;

    padding-left: 0px;
  }
`;
export const SocialIcons = styled.div`
  width: 126.1px;
  height: 30.1px;
  padding-top: 29px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 29px;
  @media (max-width: 460px) {
    padding-top: 15px;

    padding-right: 15px;
  }
`;
export const LangSelector = styled.div`
  width: 111px;
  height: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 15px;
    width: 100%;
    justify-content: center;
  }
`;
export const SelectedButtonStyled = styled.button`
  border: 0;
  background: transparent;
  color: #ffa542;

  cursor: pointer;
`;
export const LanguageTitle = styled.h3`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 18.29px;
`;
export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 10px;
  width: 101px;
  height: 82.8px;
  top: 1513.72px;
  left: 529px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  opacity: 0px;
`;
export const StyledTypography = styled.p`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.72px;
  text-align: left;
  text-decoration: none;
`;
export const StyledListItem = styled.li`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.72px;
  text-align: left;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
  }
`;
export const FooterLink = styled(Link)`
  text-decoration: none;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.72px;
  text-align: left;
  text-decoration: none;
  color: #000000;
`;
