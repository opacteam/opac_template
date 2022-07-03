import React from "react";
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
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
const AboutCard = ({ item }) => {
  let { t } = useTranslation();
  return (
    <Card
      raised={true}
      sx={{
        cursor: "pointer",
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        transition: "background .2s ease",
        "&:hover": {
          backgroundColor: "#a6c866",
        },
      }}
    >
      <CardMedia
        component="img"
        height="350"
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
    </Card>
  );
};

AboutCard.propTypes = {
  item: PropTypes.object,
};
export default AboutCard;
