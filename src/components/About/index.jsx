import React from "react";
import { SubDescription, SubHeading, ViewMore } from "../../styles";
import {
  Typography,
  Grid,
  Container,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { AboutContainer } from "./About.style";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SectionHeader from "../SectionHeader";
import AboutCard from "./AboutCard";
const About = () => {
  const { t } = useTranslation();
  const TEMPLATE = useSelector((state) => state.template);
  const about = TEMPLATE.pages.home.about;
  return (
    <AboutContainer maxWidth="false" banner={about.banner}>
      <Container maxWidth={"xl"}>
        {" "}
        <Grid container>
          <Grid item span={12}>
            <SectionHeader
              heading={about.heading}
              description={about.description}
            />
          </Grid>
        </Grid>
        <Grid
          container
          row={{ xs: 1, sm: 1, md: 1, lg: 0 }}
          span={12}
          sx={{ width: "100%", marginTop: "32px" }}
        >
          {about.items.map((item, i) => (
            <Grid
              key={i + item.title}
              item
              sm={12}
              md={12}
              lg={4}
              sx={{ width: "80%" }}
            >
              <AboutCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </AboutContainer>
  );
};

export default About;
