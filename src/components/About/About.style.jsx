import { Container, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AboutContainer = styled(Container)(({ banner, theme }) => ({
  backgroundColor: "white",
  height: "auto",
  width: "100%",
  paddingTop: "100px",
  paddingBottom: "100px",
  margin: "0 auto",
  position: "relative",
  // zIndex: -2,
  // "&:before": {
  //   content: "'About Us'",
  //   color: "rgb(0,0,0,0.08)",
  //   fontSize: "4rem",
  //   maxWidth: "100vw",
  //   position: "absolute",
  //   top: "5vw",
  //   left: "5vw",
  //   zIndex: 0,
  // },
}));

export const AboutItemCard = styled(Card)(({ theme }) => ({
  cursor: "pointer",
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
  transition: "background .2s ease",
  "&:hover": {
    backgroundColor: "#a6c866",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: "24px",
  },
}));
