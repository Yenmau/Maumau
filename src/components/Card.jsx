
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import puss from '../assets/puss.jpg'
import mega from '../assets/megan.jpg'
import mario from '../assets/mario.jpg'
import "./style.css";



// import required modules
import { Autoplay, EffectFade } from "swiper";

export default function Banner() {
  return (
    <div className="lg:w-[90%] xl:w-[90%] md:w-[100%] ">
      <Swiper
        effect={"fade"}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper rounded-xl "
      >
        <SwiperSlide>
          <img src={puss} className=" object-cover " alt="Dashboard" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mega} className="object-cover" alt="Dashboard" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mario} className="object-cover" alt="Dashboard" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
