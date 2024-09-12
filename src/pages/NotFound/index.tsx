import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import NotFoundImage from "./assets/NotFoundImage.png";
import { Routes } from "../../configs/routes";
import { HEADER_HEIGHT } from "./../../shared/constants";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

export const BoxStyled = styled(Box)`
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StackStyled = styled(Stack)`
  direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
  }
`;

export const NotFound: FC = () => (
  <BoxStyled>
    <StackStyled spacing={2}>
      <img src={NotFoundImage} alt="telescope" />
      <Typography>404 | Page not found</Typography>
      <Button
        component={NavLink}
        to={Routes.ROOT}
        variant="outlined"
        color="primary"
        size="large"
      >
        home
      </Button>
    </StackStyled>
  </BoxStyled>
);
