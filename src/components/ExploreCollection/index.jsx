import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled, useTheme } from "@mui/material/styles";
import { Container, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { SubHeading, SubDescription, ViewMore } from "../../styles";
import { useTranslation } from "react-i18next";
import { ExploreCollectionContainer } from "./ExploreCollection.style";
import ExploreCollectionImage from "./ExploreCollectionImage";
const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  const theme = useTheme();
  const ec = useSelector(
    (state) => state.template.pages.home.exploreCollection
  );
  const { heading, description, items } = ec;
  const { t } = useTranslation();
  return (
    <ExploreCollectionContainer maxWidth="false">
      <Container maxWidth="xl">
        <SubHeading as="h2">{t(heading)}</SubHeading>
        <SubDescription as="p">{t(description)}</SubDescription>
        <ViewMore href="/" text={t("viewMore")} />

        <Box sx={{ width: "100%", minHeight: 500, marginTop: "50px" }}>
          <Masonry columns={{ xs: 1, sm: 3, md: 4 }} spacing={2}>
            {items.map((item, index) => (
              <ExploreCollectionImage
                item={item}
                key={item.thumbnail + index}
              />
            ))}
          </Masonry>
        </Box>
      </Container>
    </ExploreCollectionContainer>
  );
}
