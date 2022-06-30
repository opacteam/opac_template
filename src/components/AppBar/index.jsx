import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import {
  AppbarContainer,
  AppbarLink,
  AppbarLogo,
  AppbarLogoBox,
  AppbarRoot,
  AppbarLinkBox,
} from "./AppBar.style";

import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Appbar = () => {
  const TEMPLATE = useSelector((state) => state.template);
  const [isScroll, setIsScroll] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const AppbarConstant = TEMPLATE.components.AppBar;
  const { t } = useTranslation();

  const pages = AppbarConstant.AppBarLinks;
  const { logo, siteName, baseURL } = TEMPLATE;
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;

      if (scrolled) {
        setIsScroll(1);
      } else {
        setIsScroll(0);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppbarRoot position="fixed" className="header" scroll={isScroll}>
        <Container maxWidth={"true"}>
          <AppbarContainer maxWidth={"xl"}>
            <AppbarLogoBox onClick={(_) => (window.location = baseURL)}>
              <AppbarLogo
                component="img"
                src={logo}
                alt={`${siteName} logo`}
              ></AppbarLogo>
            </AppbarLogoBox>

            <AppbarLinkBox
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              {pages.map((page, i) => (
                // <Button key={`${page}-${i}`} sx={{ my: 2, display: "block" }}>
                //   {t(page.title)}
                // </Button>
                <AppbarLink>
                  <Typography variant="a">{t(page.title)}</Typography>
                </AppbarLink>
              ))}
            </AppbarLinkBox>

            <Box
              sx={{ display: { xs: "flex", md: "none" } }}
              style={{ alignItems: "center" }}
            >
              <div
                id="nav-icon4"
                className={isClicked ? "open" : ""}
                onClick={(_) => setIsClicked(!isClicked)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Box>
          </AppbarContainer>
        </Container>
      </AppbarRoot>
    </>
  );
};
export default Appbar;
