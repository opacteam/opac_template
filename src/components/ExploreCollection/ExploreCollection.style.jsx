import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ExploreCollectionContainer = styled(Container)(({ theme }) => ({
  height: "auto",
  minHeight: "600px",
  paddingTop: "120px",
  paddingBottom: "120px",
  backgroundColor: theme.palette.mode === "light" ? "white" : "#111111",
  width: "100%",
}));

export const ECBox = styled(Box)(({ theme }) => ({
  position: "relative",
  boxShadow: "3px 3px 4px 1px rgba(195,195,195,0.74)",
}));

export const ECBoxShadow = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "2%",
  left: "2%",
  width: "96%",
  height: "96%",
  border: "4px solid white",
  opacity: "0",
  cursor: "pointer",
  zIndex: 2,
  "&:hover": {
    opacity: 1,
    background: "rgb(10,10,10,0.5)",
  },
}));

export const ECBoxViewMore = styled("div")((_) => ({
  position: "absolute",
  bottom: "3%",
  color: "white",
  animationDuration: "1.5s",
  animationIterationCount: "infinite",
  transformOrigin: "bottom",
  margin: "0 auto",
  textAlign: "center",
  width: "100%",
  fontSize: "14px",
}));
