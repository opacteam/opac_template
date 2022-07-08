import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
};

SwiperCore.use([Navigation, Pagination]);
const Carousel = (props) => {
  let { children } = props;

  return (
    <Swiper
      speed={800}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      breakpoints={breakpoints}
      style={{ marginTop: "100px" }}
      spaceBetween={20}
      onReachEnd={() => console.log("reach end")}
      navigation
      pagination={{
        el: ".latest-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return '<div class="' + className + '">' + (index + 1) + "</div>";
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;
