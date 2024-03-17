import companyLogo from '../assets/img/logo.png';
// mport React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "./styles.css";

const HeroSection = () => {
    return (
        <div>
            {/* <img src={companyLogo} alt=""/> */}
            <Swiper className="mySwiper">
       
        <SwiperSlide><img src={companyLogo} alt=""/></SwiperSlide>
        <SwiperSlide><img src={companyLogo} alt=""/></SwiperSlide>
        <SwiperSlide><img src={companyLogo} alt=""/></SwiperSlide>
        <SwiperSlide><img src={companyLogo} alt=""/></SwiperSlide>
        <SwiperSlide><img src={companyLogo} alt=""/></SwiperSlide>

      </Swiper>
        </div>
    );
};

export default HeroSection;