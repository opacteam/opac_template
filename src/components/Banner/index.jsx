import React from "react";
import { TEMPLATE } from "../../constant";
import {
  BannerContainer,
  BannerBox,
  ShadowLayerBox,
  BannerContent,
  SearchBar,
  InputSearch,
  SubmitSearch,
  SiteHeading,
  SiteDescription,
} from "./Banner.style";
import {
  Typography,
  Button,
  Grid,
  Paper,
  InputBase,
  IconButton,
  Container,
} from "@mui/material";
import { useSelector } from "react-redux/";
import SearchIcon from "@mui/icons-material/Search";
import { setHeading } from "../../constant";
import { useTranslation } from "react-i18next";
const Banner = () => {
  const TEMPLATE = useSelector((state) => state.template);
  const { banner, heading, description } = TEMPLATE;
  const { t } = useTranslation();
  return (
    <BannerContainer
      maxWidth={"true"}
      className="bannerContainer"
      banner={banner}
    >
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <SiteHeading variant="h1">{t(heading)}</SiteHeading>
            <SiteDescription variant="p">{t(description)}</SiteDescription>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12} sm={12} style={{ width: "100%" }}>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: "800px",
                margin: "80px auto",
                textAlign: "center",
              }}
            >
              <InputBase
                style={{ height: "40px" }}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter your search"
                inputProps={{ "aria-label": "enter your search" }}
              />
              <Button
                style={{
                  height: "40px",
                  borderTop: "0",
                  borderTopLeftRadius: "0",

                  borderBottomLeftRadius: "0",
                }}
                type="submit"
                aria-label="search"
                variant="contained"
              >
                Search
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </BannerContainer>
  );
};

export default Banner;
