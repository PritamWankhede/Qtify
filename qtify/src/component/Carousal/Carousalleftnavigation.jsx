import React from 'react'
import styles from './Carousal.module.css'
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftIcon } from "../../assets/LeftIcon.svg";

const Carousalleftnavigation = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  
    useEffect(() => {
      swiper.on("slideChange", function () {
        setIsBeginning(swiper.isBeginning);
      });
    }, [isBeginning, swiper, swiper.isBeginning]);
    return (
      <div className={styles.leftNavigation}>
        {!isBeginning && <LeftIcon onClick={() => swiper.slidePrev()} />}
      </div>
  )
}

export default Carousalleftnavigation