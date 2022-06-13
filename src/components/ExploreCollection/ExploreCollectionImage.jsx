import React from "react";
import PropTypes from "prop-types";
import { ECBox, ECBoxShadow, ECBoxViewMore } from "./ExploreCollection.style";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import { useTranslation } from "react-i18next";
const ExploreCollectionImage = (props) => {
  let { thumbnail, title, href } = props.item;
  const { t } = useTranslation();
  return (
    <ECBox>
      <ECBoxShadow onClick={(_) => (window.location = href ? href : "/")}>
        <ECBoxViewMore className=" bounce">
          <div>
            <KeyboardDoubleArrowUpIcon />
          </div>

          <div> {t("viewMore")}</div>
        </ECBoxViewMore>
      </ECBoxShadow>
      <img
        src={`${thumbnail}?w=162&auto=format`}
        srcSet={`${thumbnail}?w=162&auto=format&dpr=2 2x`}
        alt={title}
        loading="lazy"
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: "block",
          width: "100%",
        }}
      />
    </ECBox>
  );
};

ExploreCollectionImage.propTypes = {
  item: PropTypes.object,
};

export default ExploreCollectionImage;
