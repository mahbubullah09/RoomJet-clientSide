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
import RoomsCard from "./RoomsCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const RoomsData = () => {
 let data= useLoaderData();

  const [sort, setSort] = useState('Default')
  const [defaltData, setDefaultData] = useState([])


  useEffect(() => {
    fetch('http://localhost:5000/rooms')
    .then(response => response.json())
   
 .then(data =>  setDefaultData(data) )
  
  },[])
  
const selectDefault = () => {
  setSort('Default')
}

const selectLow = () => {
  setSort('Low to high')

  data.sort((a, b) => {
    let x = parseInt(a.price)
    let y = parseInt(b.price)


return x-y;
  })
  


}


const selectHigh = () => {
  setSort('High to low')


  data.sort((a, b) => {
    let x = parseInt(a.price)
    let y = parseInt(b.price)


return y-x;
});
}
  return (
    <div className="my-10">
               <Helmet>
      <title>RoomJet-Rooms</title>
    </Helmet>

      <div>
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

     <div>
      <h3 className="bg-slate-500 text-white font-bold text-4xl text-center py-4 mt-8">All Rooms</h3>
      <p className="flex max-w-[16rem]  justify-evenly items-center mx-4 bg-[#ffcf00] py-2 px-4 rounded-full my-4">
        <p className="text-xl">Filter By</p>
        <div className="dropdown ">
  <label tabIndex={0} className="btn m-1">{sort}</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
    <li onClick={selectDefault}><a>Default</a></li>
    <li onClick={selectLow}><a>Low to high</a></li>
    <li onClick={selectHigh}><a>High to low</a></li>
  </ul>
</div>
      </p>
     <div className="grid grid-cols-3 gap-6 my-20">
        { 
         sort === 'Default' ?
          defaltData.map((data) => <RoomsCard key={data.room_name} data={data}/>)
          :
          data.map((data) => <RoomsCard key={data.room_name} data={data}/>)
        }
      </div>
     </div>
    </div>
  );
};

export default RoomsData;
