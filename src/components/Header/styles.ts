import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 1109.89px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 20px;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: #101010;
  font-family: Montserrat, sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 30.48px;
  text-align: left;
`;
export const HeaderEnd = styled.div`
  width: 94.4px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: row;
`;
export const Counter = styled(Badge)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: inherit;
`;
