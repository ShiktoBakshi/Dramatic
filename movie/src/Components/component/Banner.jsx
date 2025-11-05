
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";


import img1 from "../../assets/banner.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/movie.jpg";
import img4 from "../../assets/squad.webp";
import img5 from "../../assets/Wednesday.webp";

export default function App() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
             
              <div className="absolute inset-0  from-black/60 via-transparent to-transparent"></div>
              
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
