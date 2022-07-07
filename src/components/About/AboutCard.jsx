import React from "react";
import {
  Typography,
  Container,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { AboutItemCard } from "./About.style";
const AboutCard = ({ item, position }) => {
  let { t } = useTranslation();
  return (
    <Grid container xs={12}>
      <Grid item xs={6} hidden={position % 2 !== 0}>
        {t(`about.${item.description}`)}
      </Grid>
      <Grid item xs={6} sx={{ margin: "10px auto" }}>
        <AboutItemCard raised={true}>
          <CardMedia
            component="img"
            height="250"
            image={item.thumbnail}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {t(`about.${item.heading}`)}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t(`about.${item.title}`)}
            </Typography>
          </CardContent>
        </AboutItemCard>
      </Grid>
      <Grid item xs={6} hidden={position % 2 === 0}>
        {t(`about.${item.description}`)}
      </Grid>
    </Grid>
  );
};

AboutCard.propTypes = {
  item: PropTypes.object,
  position: PropTypes.number,
};
export default AboutCard;
