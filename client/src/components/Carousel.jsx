import c1 from '../assets/carousel/c1.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const img = [c1, c1, c1];

const Carousel = () => {
    return (
        <div>
            <Swiper className="mySwiper" rewind={true} navigation={false} modules={[Navigation]}>
                {img.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img  src={item} alt=""/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
