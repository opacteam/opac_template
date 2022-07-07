import { Card, CardMedia, Container } from "@mui/material";
import { styled } from "@mui/material";

export const FeatureCollectionContainer = styled(Container)(({ theme }) => ({
  height: "auto",
  minHeight: "600px",
  paddingTop: "120px",
  paddingBottom: "120px",
  backgroundColor: 'white',
  width: "100%",
 
}));

export const FCCard = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  marginTop: "100px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "left",
  backgroundColor: theme.palette.primary.light,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  "&:hover": {
    boxShadow: "0px 0px 13px 4px rgba(255,255,255,0.34)",
    transform: "translateY(-2px)",
    transition: "all 0.2s",
  },
}));

export const FCCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
