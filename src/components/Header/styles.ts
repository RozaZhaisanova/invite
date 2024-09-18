import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 1109.89px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  min-height: 60px;
  overflow-x: hidden;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: #101010;

  font-family: Montserrat;
  font-size: 25px;
  font-weight: 700;
  line-height: 30.48px;
  text-align: left;
`;
