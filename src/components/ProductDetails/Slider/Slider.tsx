import React, { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function Slider({ img }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)


    const handleMouseMove = (e, index) => {
        if (index === activeIndex) { // Only apply zoom if image is active
            const { offsetX, offsetY, target } = e.nativeEvent;
            const { clientWidth, clientHeight } = target;
    
            const xPercent = (offsetX / clientWidth) * 100;
            const yPercent = (offsetY / clientHeight) * 100;
    
            target.style.transform = `scale(1.4)`;
            target.style.transformOrigin = `${xPercent}% ${yPercent}%`;
            target.style.transition = `transform 0.3s ease`; // Add transition
        }
    };

    const handleMouseLeave = (e) => {
        e.target.style.transform = `scale(1)`;
        e.target.style.transformOrigin = `center center`;
    };

    return (
        <Fragment>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)} // Update active index
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {img.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={`https://sellxa.com/backend/${image.url}`}
                            alt={image.token}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={handleMouseLeave}
                            className="block w-full" // Changed from w-80 to w-60
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {img.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={`https://sellxa.com/backend/${image.url}`}
                            alt={image.token}
                            className="block w-full"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Fragment>
    );
}
