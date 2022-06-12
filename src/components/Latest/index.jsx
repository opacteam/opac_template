import React, { useState, useEffect } from 'react'
import { CarouselBox, LatestBox, LatestContainer } from './Latest.style'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { SubDescription, SubHeading } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
const Latest = props => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const TEMPLATE = useSelector((state) => state.template);
  const { latest } = TEMPLATE.pages.home;
  const { t } = useTranslation();
  console.log(latest)
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <LatestContainer >
      <SubHeading as="h2">{t(latest.heading)}</SubHeading>
      <SubDescription as="p">{t(latest.description)}</SubDescription>

      <Swiper
        modules={[Navigation, Pagination]}
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 4,
          }
        }}
        spaceBetween={50}

      >
        {latest.items.map((item, i) => (
          <SwiperSlide>
            <CarouselBox dimension={windowDimensions} thumbnail={item.thumbnail}></CarouselBox>
          </SwiperSlide>))}


      </Swiper>

    </LatestContainer>
  )
}


export default Latest;