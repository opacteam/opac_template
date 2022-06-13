import React from "react";
import { SubDescription, SubHeading, ViewMore } from "../../styles";
import { Typography, Grid, Container } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { AboutContainer } from "./About.style";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const About = () => {
  const { t } = useTranslation();
  const TEMPLATE = useSelector((state) => state.template);
  const about = TEMPLATE.pages.home.about;
  console.log(about);
  return (
    <AboutContainer maxWidth="false" banner={about.banner}>
      <Container maxWidth={"xl"}>
        {" "}
        <Grid container>
          <Grid item lg={6} md={6} sm={0} />

          <Grid item lg={6} md={6} sm={12}>
            <SubHeading>{t(about.heading)}</SubHeading>
            <SubDescription>{t(about.description)}</SubDescription>
            <ViewMore href="/" text={t("viewMore")} />
          </Grid>
        </Grid>
      </Container>
    </AboutContainer>
  );
};

export default About;
