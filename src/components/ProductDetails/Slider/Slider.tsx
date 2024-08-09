import React, { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { IImg } from '../../../interfaces/Img';

interface SliderProps {
    img: IImg[];
}

export default function Slider({ img }: SliderProps) {
    const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0); // Track active slide index

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, index: number) => {
        if (index === activeIndex) { // Only apply zoom if image is active
            const { offsetX, offsetY, target } = e.nativeEvent;
            const { clientWidth, clientHeight } = target as HTMLImageElement;

            const xPercent = (offsetX / clientWidth) * 100;
            const yPercent = (offsetY / clientHeight) * 100;

            (target as HTMLImageElement).style.transform = `scale(1.5)`;
            (target as HTMLImageElement).style.transformOrigin = `${xPercent}% ${yPercent}%`;
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        (e.target as HTMLImageElement).style.transform = `scale(1)`;
        (e.target as HTMLImageElement).style.transformOrigin = `center center`;
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
                            className="block w-full"
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
                {img.map((image, index) => (<SwiperSlide key={index}>
    <img
        src={`https://sellxa.com/backend/${image.url}`}
        alt={image.token}
        onMouseMove={(e) => handleMouseMove(e, index)}
        onMouseLeave={handleMouseLeave}
        onError={(e) => {
            console.error(`Image failed to load: ${image.url}`);
            (e.target as HTMLImageElement).src = '/path/to/placeholder/image.png'; // Use a placeholder image if loading fails
        }}
        className="block w-full"
    />
</SwiperSlide>
                ))}
            </Swiper>
        </Fragment>
    );
}
