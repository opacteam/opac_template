import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFlip, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CarouselBox, CarouselText, CarouselPagination } from './Latest.style'
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

SwiperCore.use([
    Navigation, Pagination
]);
const LatestSwiper = props => {
    let { latest, windowDimensions } = props;

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            breakpoints={breakpoints}
            style={{ marginTop: '100px' }}
            spaceBetween={20}
            onReachEnd={() => console.log('reach end')}
            navigation
            pagination={{
                el: '.latest-pagination',
                clickable: true,
                renderBullet: (index, className) => {
                    return '<div class="' + className + '">' + (index + 1) + "</div>";
                },
            }}
        >
            {latest.items.map((item, i) => (

                <SwiperSlide key={item.thumbnail + i}>
                    <CarouselBox dimension={windowDimensions} thumbnail={item.thumbnail}>
                        <CarouselText as="p">{item.title}</CarouselText>
                    </CarouselBox>
                </SwiperSlide>))}
        </Swiper>
    )
}

LatestSwiper.propTypes = {
    latest: PropTypes.object,
    windowDimensions: PropTypes.object
}

export default LatestSwiper