import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PropTypes from "prop-types";
export const SubHeading = styled(Typography)((_) => ({
  opacity: ".6",
  fontSize: "13px",
  textTransform: "uppercase",
  textAlign: "left",
  fontWeight: "600",
}));

export const SubDescription = styled(Typography)(({ theme }) => ({
  marginTop: "25px",
  lineHeight: "1.3",
  letterSpacing: "1.5px",
  textAlign: "left",
  fontFamily: "'Overlock', cursive",
  fontWeight: "600",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.only("md")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3rem",
  },
}));

export const ViewMore = ({ href, text }) => (
  <Typography
    style={{
      display: "flex",
      justifyContent: "right",
      textAlign: "right",
      fontWeight: "600",
      cursor: "pointer",
      fontSize: "1.2rem",
      marginTop: "20px",
     
    }}
    as="div"
    onClick={(_) => (window.location = href)}
>
    {text}
    <span style={{ display: "flex", alignItems: "center" }}>
      <ArrowRightAltIcon />
    </span>
  </Typography>
);

ViewMore.propTypes = {
  href: PropTypes.string,
};
