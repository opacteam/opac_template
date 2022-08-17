import { Card, CardMedia, Container } from "@mui/material";
import { styled } from "@mui/material";

export const FeatureCollectionContainer = styled(Container)(({ theme }) => ({
  height: "auto",
  minHeight: "600px",
  paddingTop: "120px",
  paddingBottom: "120px",
  backgroundColor: "white",
  width: "100%",
}));

export const FCCard = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "left",
  border: "1px solid rgb(136,182,51)",
  backgroundColor: theme.palette.primary.light,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  "&:hover": {
    transition: "all 0.2s",
  },
}));

export const FCCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "50%",
  "&:hover": {
    
    transition: "all 0.2s",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
