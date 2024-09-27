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
  @media (max-width: 768px) {
    width: 100%;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 427px;
  height: 100%;
`;

export const Column = styled.div``;
export const ColumnRight = styled.div`
  margin-bottom: 17px;
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
export const Lang = styled.div`
  width: 111px;
  height: 20px;
  top: 1570px;
  left: 802px;
  gap: 0px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SelectedButtonStyled = styled.button`
  border: 0;
  background: transparent;
  color: #ffa542;

  cursor: pointer;
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
