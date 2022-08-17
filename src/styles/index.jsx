import { Typography, Button } from "@mui/material";
import styled from "@emotion/styled";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PropTypes from "prop-types";
export const SubHeading = styled(Typography)((_) => ({
  opacity: "1",
  fontSize: "3rem",
  textTransform: "uppercase",
  fontWeight: "600",
}));

export const SubDescription = styled(Typography)(({ theme }) => ({
  marginTop: "25px",
  lineHeight: "1.5",
  fontWeight: "400",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.4rem",
  },
}));

export const ViewMoreText = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "right",
  textAlign: "right",
  fontWeight: "600",
  cursor: "pointer",
  fontSize: "1.2rem",
  marginTop: "20px",
  color: "#538000",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));
export const ViewMore = ({ href, text }) => (
  <ViewMoreText style={{}} as="a" href={href}>
    {text}
    <span style={{ display: "flex", alignItems: "center" }}>
      <ArrowRightAltIcon />
    </span>
  </ViewMoreText>
);

export const ExploreButton = styled(Button)(({ href, text }) => ({
  padding: "10px 50px",
  fontSize: "1.3rem",
  fontWeight: "bold",
  marginTop: "20px",
}));

ExploreButton.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};

ViewMore.propTypes = {
  href: PropTypes.string,
};
