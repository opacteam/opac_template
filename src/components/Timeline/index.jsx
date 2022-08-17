import React from "react";
import { TimelineContainer } from "./Timeline.style";
import { Container } from "@mui/material";
import { SubDescription, SubHeading, ViewMore } from "../../styles";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SectionHeader from "../SectionHeader";

const Timeline = () => {
  const TEMPLATE = useSelector((state) => state.template);
  const { timeline } = TEMPLATE.pages.home;
  const { t } = useTranslation();
  return (
    <TimelineContainer maxWidth={"true"}>
      <Container maxWidth={"xl"}>
      <SectionHeader heading={timeline.heading} description={timeline.description} />
      </Container>
    </TimelineContainer>
  );
};

export default Timeline;
