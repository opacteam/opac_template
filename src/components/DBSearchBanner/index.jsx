import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
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
} from "./DBSearchBanner.style";
import {
  Container,
  Grid,
  Paper,
  InputBase,
  Button,
  Typography,
} from "@mui/material";
const DBSearchBanner = (props) => {
  let { searchURL, searchKeyword, database, children } = props;
  const TEMPLATE = useSelector((state) => state.template);
  const { t } = useTranslation();
  return (
    <BannerContainer
      maxWidth={"true"}
      className="bannerContainer"
      banner={database.banner}
    >
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <SiteHeading variant="h1">{t(database.heading)}</SiteHeading>
            <SiteDescription variant="p">
              {t(database.description)}
            </SiteDescription>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid
            item
            md={12}
            sm={12}
            style={{
              width: "100%",
              position: "absolute",
              top: "calc(80vh - 27.5px)",
              left: 0,
              right: 0,
            }}
          >
          {children}
          </Grid>
        </Grid>
      </Container>
    </BannerContainer>
  );
};

DBSearchBanner.propTypes = {

  database: PropTypes.object.isRequired,
};

export default DBSearchBanner;
