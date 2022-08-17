import React, { useRef } from "react";
import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarouselBox, CarouselText, CarouselPagination } from "./Latest.style";
import Carousel from '../Carousel'
const LatestSwiper = (props) => {
  let { latest, windowDimensions } = props;

  return (
    <Carousel>
      {latest.items.map((item, i) => (
        <SwiperSlide key={item.thumbnail + i}>
          <CarouselBox dimension={windowDimensions} thumbnail={item.thumbnail}>
            <CarouselText as="p">{item.title}</CarouselText>
          </CarouselBox>
        </SwiperSlide>
      ))}
    </Carousel>
  );
};

LatestSwiper.propTypes = {
  latest: PropTypes.object,
  windowDimensions: PropTypes.object,
};

export default LatestSwiper;
