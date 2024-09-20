import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;
export const PhoneLink = styled.a`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;
export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  margin: 0 20px; // Отступы между колонками
`;
export const SiteName = styled.div`
  padding-left: 29px;
  padding-top: 29px;
`;
export const SocialIcons = styled.div`
  width: 126.1px;
  height: 30.1px;
  padding-top: 29px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 29px;
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
`;
export const FooterLink = styled(Link)`
  text-decoration: none;
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.72px;
  text-align: left;
  text-decoration: none;
  color: #101010;
`;
