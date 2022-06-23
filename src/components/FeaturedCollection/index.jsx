import React from "react";
import { SubDescription, SubHeading, ViewMore } from "../../styles";
import { FeatureCollectionContainer } from "./FeaturedCollection.style";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import FeaturedCollectionCard from "./FeaturedCollectionCard";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import SectionHeader from "../SectionHeader";
const FeaturedCollection = () => {
  const TEMPLATE = useSelector((state) => state.template);
  const fc = TEMPLATE.pages.home.featuredCollection;
  const { t } = useTranslation();
  return (
    <FeatureCollectionContainer maxWidth={"false"}>
      <Container maxWidth="xl">
      <SectionHeader heading={fc.heading} description={fc.description} />
        <Grid container spacing={2}>
          {fc.items.map((item, i) => {
            let { title, author, tag, thumbnail } = item;
            return (
              <Grid item sm={12} md={6} key={item.thumbnail + i}>
                <FeaturedCollectionCard item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </FeatureCollectionContainer>
  );
};

export default FeaturedCollection;
