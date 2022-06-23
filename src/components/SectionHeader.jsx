import React from "react";
import PropTypes from "prop-types";
import { SubDescription, SubHeading, ViewMore } from "../styles";
import { useTranslation } from "react-i18next";
const SectionHeader = ({ heading, description, url = "/" }) => {
  const { t } = useTranslation();
  return (
    <>
      <SubHeading as="h2">{t(heading)}</SubHeading>
      <SubDescription as="p">{t(description)}</SubDescription>
      <ViewMore href={url} text={t("viewMore")} />
    </>
  );
};

SectionHeader.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default SectionHeader;
