import React from "react";
import PropTypes from "prop-types";
import { Card, Box, Typography, CardMedia, CardContent } from "@mui/material";
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
          <Typography
            sx={{ color: "#ada46d", textAlign: "left", fontWeight: "600" }}
            as="p"
          >
            {tag}
          </Typography>
          <SubDescription as="p" style={{ color: "white", fontSize: "1.2rem" }}>
            {title}
          </SubDescription>
          <Typography
            sx={{
              color: "#f1f1f1",
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
