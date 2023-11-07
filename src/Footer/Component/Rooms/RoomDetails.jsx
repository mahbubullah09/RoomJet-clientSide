import { space } from "postcss/lib/list";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import moment from "moment";
import { AuthContext } from "../../../Provider/authProvider";






const RoomDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [room, SetRoom] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setData(data));
    const findData = data?.find((data) => data._id == id);
    SetRoom(findData);
  }, [data, id]);

// booked data feach by email
const {user} = useContext(AuthContext)
const email = user?.email

const [booked, setBooked] = useState([]);
  const url = `http://localhost:5000/booked/email?email=${email}`;

  useEffect(() => {
   
//    axios.get(url, {withCredentials:true})
//    .then(res => {
//     setBookings(res.data)
//    })
        
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, [url]);

  //filter 

  const [IsBooked, setIsBooked] = useState();
  console.log(IsBooked);

  useEffect(() => {

    const findBooked = booked.find((data) => data.room_id === id)
    setIsBooked(findBooked)


  },[id,booked])












const image = user?.photoURL
const User_name  = user?.displayName

const time = moment().format("YYYY/MM/DD");

const [rating, setRating] = useState();
const [message , setMessage] = useState();

const handleReview = (e) =>{
  e.preventDefault();
  const rating= e.target.rating.value;
  setRating(rating);
  const message = e.target.message.value;
  setMessage(message)
}




  //   const { room_name, description, price, availability, image, size } = room;
  return (

    
    <div>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={room?.image}
                  alt="Product Image"
                />
              </div>
              <div className="flex justify-between">
                <div className=" px-2 ">
                  <Link to={`/book/${room?._id}`}>
                    <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                      Book Now
                    </button>
                  </Link>
                </div>
                <div>
                  {
                    IsBooked ? 
                    <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Give a review
                  </button>
                  :
                  <button
                   disabled
                    className=" cursor-help w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    Give a review
                  </button>
                  }
                </div>

                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
                      Feedback
                    </h2>
                    <p className="mb-5 leading-relaxed text-gray-600">
                      If you had any issues or you liked our service, please
                      share with us!
                    </p>
                   <form onSubmit={handleReview}>
                   <div className="mb-4 font-medium text-lg">
                      <label
                        htmlFor="email"
                        className="text-sm leading-7 text-gray-600"
                      >
                        Rating
                      </label>
                      <div className="flex items-center ">
                        <input
                          type="number"
                          min="1.0"
                          max="5.0"
                          name="rating"
                          step="0.1"
                          className="w-20 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                        <p>out of 5</p>
                      </div>
                    </div>
                    <div className="mb-4 font-medium text-lg">
                      <label
                        htmlFor="message"
                        className="text-sm leading-7 text-gray-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      ></textarea>
                    </div>
                    <button type="submit"  className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                      Send
                    </button>
                   </form>
                    <p className="mt-3 text-xs text-gray-500">
                      Feel free to connect with us on social media platforms.
                    </p>
                  </div>
                </dialog>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {room?.room_name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {room?.description}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    ${room?.price}
                  </span>
                </div>
                <div className="flex ">
                  <span className="font-bold text-gray-700 dark:text-gray-300 ">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {room?.availability ? <p>Available</p> : <p>Unavailable</p>}
                  </span>
                </div>
              </div>
              <div className="flex">
                <p className="text-gray-300 mr-4">Size: {room?.size}</p>
                {room?.specialOffer ? (
                  <p className="text-gray-300">
                    Special Offer :{" "}
                    {room?.specialOdder ? (
                      <span>{room?.specialOdder}</span>
                    ) : (
                      ""
                    )}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Public Review:
                </span>
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
                    modules={[
                      Autoplay,
                      EffectCoverflow,
                      Pagination,
                      Navigation,
                    ]}
                    className="swiper_container"
                  >
                    <SwiperSlide>
                      <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                          <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                          </div>
                          <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">
                              Maria Smantha
                            </h4>
                            <hr />
                            <p className="mt-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                              </svg>
                              Lorem ipsum dolor sit amet eos adipisci,
                              consectetur adipisicing elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                          <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
                          </div>
                          <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">
                              Lisa Cudrow
                            </h4>
                            <hr />
                            <p className="mt-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                              </svg>
                              Neque cupiditate assumenda in maiores repudi
                              mollitia architecto.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                          <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                          </div>
                          <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">
                              John Smith
                            </h4>
                            <hr />
                            <p className="mt-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                              </svg>
                              Delectus impedit saepe officiis ab aliquam
                              repellat rem unde ducimus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                          <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                          </div>
                          <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">
                              John Smith
                            </h4>
                            <hr />
                            <p className="mt-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                              </svg>
                              Delectus impedit saepe officiis ab aliquam
                              repellat rem unde ducimus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                          <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                          </div>
                          <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">
                              John Smith
                            </h4>
                            <hr />
                            <p className="mt-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                              </svg>
                              Delectus impedit saepe officiis ab aliquam
                              repellat rem unde ducimus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

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

                <div className="hidden md:block max-w-md">
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
                    modules={[
                      Autoplay,
                      EffectCoverflow,
                      Pagination,
                      Navigation,
                    ]}
                    className="swiper_container"
                  >
                    <SwiperSlide>
                      <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                          <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                          </div>
                          <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">
                              Maria Smantha
                            </h4>
                            <hr />
                            <p className="mt-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                              </svg>
                              Lorem ipsum dolor sit amet eos adipisci,
                              consectetur adipisicing elit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                          <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
                          </div>
                          <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">
                              Lisa Cudrow
                            </h4>
                            <hr />
                            <p className="mt-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                              </svg>
                              Neque cupiditate assumenda in maiores repudi
                              mollitia architecto.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                          <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                          </div>
                          <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">
                              John Smith
                            </h4>
                            <hr />
                            <p className="mt-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                              </svg>
                              Delectus impedit saepe officiis ab aliquam
                              repellat rem unde ducimus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                          <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                          </div>
                          <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">
                              John Smith
                            </h4>
                            <hr />
                            <p className="mt-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                              </svg>
                              Delectus impedit saepe officiis ab aliquam
                              repellat rem unde ducimus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                          <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                            <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                          </div>
                          <div className="p-6">
                            <h4 className="mb-4 text-2xl font-semibold">
                              John Smith
                            </h4>
                            <hr />
                            <p className="mt-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="inline-block h-7 w-7 pr-2"
                                viewBox="0 0 24 24"
                              >
                                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                              </svg>
                              Delectus impedit saepe officiis ab aliquam
                              repellat rem unde ducimus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
