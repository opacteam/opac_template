import React, { useState, useEffect } from 'react'
import { CarouselBox, CarouselText, LatestContainer } from './Latest.style'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { SubDescription, SubHeading, ViewMore } from '../../styles';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const breakpoints = {
  600: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 3,
  },
  1300: {
    slidesPerView: 4,
  },

}
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
    <LatestContainer maxWidth={'true'} dimension={windowDimensions} >
      <Container maxWidth={'xl'}>
        <SubHeading as="h2">{t(latest.heading)}</SubHeading>
        <SubDescription as="p">{t(latest.description)}</SubDescription>
        <ViewMore href="/" text={t('viewMore')} />
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          breakpoints={breakpoints}
          style={{ marginTop: '100px' }}
          spaceBetween={20}

        >
          {latest.items.map((item, i) => (

            <SwiperSlide>
              <CarouselBox dimension={windowDimensions} thumbnail={item.thumbnail}>
                <CarouselText as="p">{item.title}</CarouselText>
              </CarouselBox>
            </SwiperSlide>))}


        </Swiper>
      </Container>

    </LatestContainer>
  )
}


export default Latest;