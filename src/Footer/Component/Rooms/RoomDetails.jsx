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
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import ReviewCard from "../Home/ReviewCard";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const RoomDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [room, SetRoom] = useState([]);

  useEffect(() => {
    fetch("https://roomjet-server-side.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => setData(data));
    const findData = data?.find((data) => data._id == id);
    SetRoom(findData);
  }, [data, id]);

  // booked data feach by email
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [booked, setBooked] = useState([]);
  const url = `https://roomjet-server-side.vercel.app/booked/email?email=${email}`;

  useEffect(() => {
       axios.get(url, {withCredentials:true})
       .then(res => {
        setBooked(res.data)
       })

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setBooked(data));
  }, [url]);

  //filter

  const [IsBooked, setIsBooked] = useState();

  useEffect(() => {
    const findBooked = booked?.find((data) => data.room_id === id);
    setIsBooked(findBooked);
  }, [id, booked]);

  const [reviewed, setReviewed] = useState([]);
  const reviewUrl = `https://roomjet-server-side.vercel.app/review/rooms?room_id=${id}`;

  useEffect(() => {
    //    axios.get(url, {withCredentials:true})
    //    .then(res => {
    //     setBookings(res.data)
    //    })

    fetch(reviewUrl)
      .then((res) => res.json())
      .then((data) => setReviewed(data));
  }, [reviewUrl]);

  const image = user?.photoURL;
  const user_name = user?.displayName;

  const time = moment().format("YYYY/MM/DD");

  // const [rating, setRating] = useState();
  // const [message , setMessage] = useState();

  const handleReview = (e) => {
    e.preventDefault();
    const rating = e.target.rating.value;
    e.target.rating.value = "";
    const message = e.target.message.value;
    e.target.message.value = "";

    const addReview = {
      image,
      user_name,
      time,
      rating,
      message,
      room_id: id,
    };
    console.log(addReview);

    fetch("https://roomjet-server-side.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          toast.success("Review added successfully!!");
        }
      });
  };

  //   const { room_name, description, price, availability, image, size } = room;
  return (
    <div>
               <Helmet>
      <title>RoomJet-Room Details</title>
    </Helmet>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={room?.image}
                  alt="Product Image"
                />
              </div>
              <div className="flex justify-between">
                <div className=" px-2 ">
                  <Link to={`/book/${room?._id}`}>
                    <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-700">
                      Book Now
                    </button>
                  </Link>
                </div>
                <div>
                  {IsBooked ? (
                    <button
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                      className="w-full bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-700"
                    >
                      Give a review
                    </button>
                  ) : (
                    <button
                      disabled
                      className=" cursor-help w-full bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-700"
                    >
                      Give a review
                    </button>
                  )}
                </div>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
                      Feedback
                    </h2>
                    <p className="mb-5 leading-relaxed text-gray-600">
                      If you had any issues or you liked our service, please
                      share with us!
                    </p>
                    <form onSubmit={handleReview} method="dialog">
                      <div className="mb-4 font-medium text-lg">
                        <label
                          htmlFor="email"
                          className="text-sm leading-7 text-gray-600"
                        >
                          Rating
                        </label>
                        <div className="flex items-center ">
                          <input
                            required
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
                          required
                          id="message"
                          name="message"
                          className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
                      >
                        Send
                      </button>
                    </form>
                    <p className="mt-3 text-xs text-gray-500">
                      Feel free to connect with us on social media platforms.
                    </p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-white mb-2">
                {room?.room_name}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{room?.description}</p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-300">Price:</span>
                  <span className="text-gray-300">${room?.price}</span>
                </div>
                <div className="flex ">
                <p className="text-gray-300 mr-4">Size: {room?.size}</p>
                </div>
              </div>
              <div className="flex">
               
                {room?.specialOffer ? (
                  <p className="text-gray-300">
                    Special Offer :{" "}
                    {room?.specialOdder ? (
                      <span>{room?.specialOdder}</span>
                    ) : (
                      "No special offer for this room"
                    )}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div>
                <span className="font-bold text-gray-300">
                  Public Review: Total review = {reviewed.length}
                </span>

                {reviewed.length > 0 ? (
                  <div className=" max-w-md">
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
                      {reviewed?.map((data, idx) => (
                        <SwiperSlide key={idx}>
                          <ReviewCard data={data} />
                        </SwiperSlide>
                      ))}

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
                ) : (
                  <div>
                    <h2 className="text-4xl font-bold text-center text-gray-300 my-10">
                      No Review Available
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
