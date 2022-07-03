import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AboutContainer = styled(Container)(({ banner, theme }) => ({
  backgroundColor: "white",
  height: "auto",
  width: "100%",
  paddingTop: "100px",
  paddingBottom: "100px",
  margin: "0 auto",
}));
