import React from "react";
import { Typography, Link, Box, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";

export const Copyright = () => {
  const TEMPLATE = useSelector((state) => state.template);
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        {TEMPLATE.siteName}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.secondary.dark,
        height: "auto",
        minHeight: "500px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3"> Connect with us </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            test
          </Grid>
        </Grid>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
