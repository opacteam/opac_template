import React, { useState, useEffect, useRef } from "react";
import { CarouselBox, CarouselText, LatestContainer } from "./Latest.style";
import SectionHeader from "../SectionHeader";
import { SubDescription, SubHeading, ViewMore } from "../../styles";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import LatestSwiper from "./LatestSwiper";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const Latest = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const TEMPLATE = useSelector((state) => state.template);
  const { latest } = TEMPLATE.pages.home;
  const { t } = useTranslation();
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <LatestContainer maxWidth={"true"} dimension={windowDimensions}>
      <Container maxWidth={"xl"}>
        <SectionHeader
          heading={latest.heading}
          description={latest.description}
        />
        <LatestSwiper latest={latest} windowDimensions={windowDimensions} />
      </Container>
    </LatestContainer>
  );
};

export default Latest;
