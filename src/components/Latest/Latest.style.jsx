import React from "react";
import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import Carousel from "react-material-ui-carousel";

const LATEST_HEIGHT = 500;
export const LatestContainer = styled(Container)((_) => ({
  height: `${LATEST_HEIGHT}px`,

  position: "relative",
  width: "100vw",
}));

export const LatestBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-100px",
  height: `${LATEST_HEIGHT - 100}px`,
  background: "grey",
  width: "80vw",
  maxWidth: "1000px",
  left: 0,
  right: 0,
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const LatestCarousel = styled(Carousel)(({ theme }) => ({
  height: "100%",
 

}));
