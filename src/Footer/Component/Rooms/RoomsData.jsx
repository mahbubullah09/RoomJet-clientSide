import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import { useLoaderData } from "react-router-dom";
import RoomImage from "./RoomImage";

const RoomsData = () => {
  const data = useLoaderData();
  return (
    <div className="my-10">

        <h2 className="text-4xl font-bold text-center my-5">Image Gallary</h2>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        
        spaceBetween={30}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 5,
          depth: 200,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <div className="mb-28">
          {data.map((data,idx) => (
            <SwiperSlide key={idx}>
              <RoomImage key={idx} data={data} />
            </SwiperSlide>
          ))}
        </div>

        <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
      </Swiper>
    </div>
  );
};

export default RoomsData;
