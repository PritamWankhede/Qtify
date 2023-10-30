import React from 'react'
import styles from './Carousal.module.css'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "./Carousalleftnavigation";
import CarouselRightNavigation from "./CarousalrightNavigation";
import "swiper/css";
import { useEffect } from 'react';

const Controls = ({ data }) => {
    const swiper = useSwiper();
  
    useEffect(() => {
      swiper.slideTo(0, 100);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);
  
    return <></>;
  };

const Carousal = ({ data, renderComponent }) => {
  return(
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "10px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />

        {data.map((item) => (
          <SwiperSlide>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default Carousal