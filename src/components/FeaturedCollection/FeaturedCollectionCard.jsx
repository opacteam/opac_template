import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  Box,
  Typography,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import { FCCard, FCCardMedia } from "./FeaturedCollection.style";
import { SubDescription } from "../../styles";
const FeaturedCollectionCard = (props) => {
  let { thumbnail, title, tag, author } = props.item;
  return (
    <FCCard>
      <FCCardMedia
        component="img"
        sx={{ width: "50%" }}
        md={{ width: 100 }}
        image={thumbnail}
        alt={title}
      />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <CardContent sx={{ flex: "0 1 auto", alignItems: "center" }}>
          <Chip color="primary" label={tag} sx={{ fontSize: "1rem" }} />
          <SubDescription as="p">{title}</SubDescription>
          <Typography
            sx={{
              opacity: "0.75",
              marginTop: "10px",
              textAlign: "left",
            }}
            as="p"
          >
            {author}
          </Typography>
        </CardContent>
      </Box>
    </FCCard>
  );
};

FeaturedCollectionCard.propTypes = {
  item: PropTypes.object,
};

export default FeaturedCollectionCard;
