import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
const BaseHeight = 500;
export const LatestContainer = styled(Container)(({ theme, dimension }) => {
  let { width } = dimension;
  const MAX_WIDTH = 1500;
  return {
    backgroundColor: theme.palette.primary.light,
    height: ((_) => {
      if (width < 600) return `${width + BaseHeight}px`;
      if (width > 600 && width <= 1000) return `${width / 2 + BaseHeight}px`;
      if (width > 1000 && width <= 1200) return `${width / 3 + BaseHeight}px`;
      else
        return `${(width > MAX_WIDTH ? MAX_WIDTH : width) / 4 + BaseHeight}px`;
    })(),
    paddingTop: "100px",
    paddingBottom: "100px",
    position: "relative",
  };
});

export const CarouselText = styled(Typography)((description) => ({
  fontSize: "20px",
  color: "white",
  position: "absolute",
  bottom: "16px",
  left: "16px",
  fontWeight: "600",
}));
export const CarouselBox = styled(Box)(({ theme, dimension, thumbnail }) => {
  let { width, height } = dimension;
  const MAX_WIDTH = 1500;

  return {
    borderRadius: "5px",
    backgroundImage: `url("${thumbnail}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    cursor: "pointer",
    filter: "brightness(0.8)",
    position: "relative",
    boxShadow: "6px 6px 6px 0px rgba(0,0,0,0.6)",
    ":hover": {
      filter: "brightness(0.6)",
    },
    height: ((_) => {
      if (width < 600) return `${width - 32}px`;
      if (width > 600 && width <= 1000) return `${(width - 52) / 2}px`;
      if (width > 1000 && width <= 1200) return `${(width - 72) / 3}px`;
      else return `${(width > MAX_WIDTH ? MAX_WIDTH : width - 92) / 4}px`;
    })(),
  };
});

export const CarouselPagination = styled(Box)((_) => ({
  display: "flex",
  width: "80%",
  maxWidth: "500px",
}));

LatestContainer.propTypes = {
  dimension: PropTypes.object,
};
CarouselBox.propTypes = {
  dimension: PropTypes.object,
  thumbnail: PropTypes.string,
};
