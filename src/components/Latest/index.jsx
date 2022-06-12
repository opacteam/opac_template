import React from 'react'
import { LatestBox, LatestContainer } from './Latest.style'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';


const Latest = props => {
  return (
    <LatestContainer maxWidth="false"  >
      
      <LatestBox>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
  
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
      </LatestBox>
    </LatestContainer>
  )
}


export default Latest