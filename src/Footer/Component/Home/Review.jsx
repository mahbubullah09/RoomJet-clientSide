import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";





const Review = () => {

const [review, setReview] = useState();

useEffect(() => {
  fetch("http://localhost:5000/reviews")
    .then((res) => res.json())
    .then((data) => setReview(data));
 
}, []);
console.log(review);




  return (
    <div className="max-w-6xl mx-auto">
      <section className="text-white">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl  bg-slate-700  p-2 mb-4 rounded mt-28">
          <h3 className="mb-6 text-3xl font-bold text-[#ffcf00]">
            Testimonials
          </h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0">
            Discover Heartwarming Stories, Honest Feedback, and Unforgettable
            Experiences Shared by Our Guests. Get Inspired, Make Informed
            Choices, and Join Us for Your Next Memorable Stay!
          </p>
        </div>

       <div className="md:hidden">
       <Swiper
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
         {
          review?.map((data,idx) =>  <SwiperSlide key={idx}> <ReviewCard data={data}/>
            
          </SwiperSlide>)
         }

          

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

       <div className="hidden md:block">
       <Swiper
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={30}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {
          review?.map((data,idx) =>  <SwiperSlide key={idx}> <ReviewCard data={data}/>
            
          </SwiperSlide>)
         }

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
      </section>
    </div>
  );
};

export default Review;
