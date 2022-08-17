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

const AboutCardInfo = ({ item }) => {
  let { t } = useTranslation();
  return (
    <div
      style={{ margin: "40px  auto", padding: "5px 10px", maxWidth: "600px" }}
    >
      <Typography variant="h3"> {t(`about.${item.title}`)}</Typography>
      <Typography component="p" sx={{ marginTop: "20px", fontSize: "1rem" }}>
        {" "}
        {t(`about.${item.description}`)}
      </Typography>
      <Button variant="contained" sx={{ marginTop: "30px" }} size="large">
        {t("viewMore")}
      </Button>
    </div>
  );
};
const AboutCard = ({ item, position }) => {
  let { t } = useTranslation();
  return (
    <Grid container xs={12}>
      <Grid
        item
        xs={12}
        md={6}
        order={{ xs: 2, sm: 2, md: position % 2 !== 0 ? 1 : 2 }}
      >
        <AboutCardInfo item={item} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ margin: "10px auto" }}
        order={{ xs: 1, sm: 1, md: position % 2 !== 0 ? 2 : 1 }}
      >
        <AboutItemCard raised={true}>
          <CardMedia
            component="img"
            height="300"
            image={item.thumbnail}
            alt={t(`about.${item.heading}`)}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {t(`about.${item.heading}`)}
            </Typography>
          </CardContent>
        </AboutItemCard>
      </Grid>
    </Grid>
  );
};

AboutCard.propTypes = {
  item: PropTypes.object,
  position: PropTypes.number,
};
export default AboutCard;
