import React from "react";
import {
  Typography,
  Link,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const Copyright = () => {
  const TEMPLATE = useSelector((state) => state.template);
  return (
    <Typography variant="body2">
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
  const TEMPLATE = useSelector((state) => state.template);
  const { t } = useTranslation();
  const FOOTER = TEMPLATE.components.Footer;
  let links = FOOTER.FooterLinks;

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.primary.main,
        height: "auto",
        minHeight: "300px",
        color: "white",
        paddingTop: "80px",
        paddingBottom: "20px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{ padding: "2rem" }}>
            <img
              src={TEMPLATE.logo}
              alt="Footer Logo"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={5} container>
            {links.map((link, index) => (
              <Grid
                item
                xs={6}
                sx={{ marginBottom: "20px", textAlign: "left" }}
              >
                <Link
                  style={{ fontWeight: "bold" }}
                  underline="hover"
                  href={link.href}
                  color="inherit"
                  index={`FooterLink-${index}`}
                >
                  {t(`${link.title}`)}
                </Link>
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12} md={3} sx={{ textAlign: "left" }}>
            <img
              src="http://surrey.minisisinc.com/surrey/images/SurreyLogo-white.png"
              alt="Surrey.ca"
            />

            <p>{t(`poweredby`)}:</p>
            <img
              src="http://surrey.minisisinc.com/surrey/images/minisis_logo.png"
              alt="MINISIS inc."
            />
          </Grid>
        </Grid>
        <Divider flexItem sx={{ marginTop: "40px", marginBottom: "20px" }} />

        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
