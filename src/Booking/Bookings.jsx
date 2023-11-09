import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/authProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  const [data, setData] = useState([]);
  const [room, SetRoom] = useState([]);
  const [Name, setname] = useState();
  const [phone, setPhone] = useState();
  const [date, setDate] = useState();
  const [dataChange, setDataChange] = useState();

  useEffect(() => {
    fetch("https://roomjet-server-side.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => setData(data));
    const findData = data?.find((data) => data._id == id);
    SetRoom(findData);
  }, [data, id]);
  //   const { room_name, price, image, size } = room;
  const room_name = room?.room_name;
  const price = room?.price;
  const image = room?.image;
  const size = room?.size;
  const email = user?.email;
  const _id = room?._id;

  //setToday date
  const todayDate = moment().format("YYYY-MM-DD");

  //handleBookings
  const handleBookings = (e) => {
    e.preventDefault();
    const Name = e.target.name.value;
    setname(Name);
    const phone = e.target.phone.value;
    setPhone(phone);
    const date = e.target.date.value;
    setDate(date);
    console.log(Name, phone, date);

    console.log(Name, date, phone);
  };

  //fetch bokked data

  const [booked, setBooked] = useState([]);
  const url = `https://roomjet-server-side.vercel.app/booked?room_id=${_id}`;

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

  const [alreadyBooked, setAlreadyBooked] = useState();
  console.log(alreadyBooked);

  useEffect(() => {
    const findBooked = booked.find((data) => data.date === dataChange);
    setAlreadyBooked(findBooked);
  }, [dataChange, booked]);

  //post Bookings

  const handleSubmit = () => {
    console.log("modal data");
    if (Name && phone && date) {
      let addBooking = {
        room_name,
        price,
        image,
        size,
        room_id: _id,
        Name,
        email,
        phone,
        date,
      };
      console.log(addBooking);

      fetch("https://roomjet-server-side.vercel.app/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addBooking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your bookings has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      toast.error("Can't fill blank any input field");
    }
  };

  return (
    <div>
      <Helmet>
        <title>RoomJet-Room Bookings</title>
      </Helmet>
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        Book Your Room Now
      </h2>
      <div className="py-6 px-2">
        <div className="px-1 flex flex-col md:flex-row gap-4 bg-white rounded-lg shadow-lg overflow-hidden py-10 mx-auto  lg:max-w-6xl">
          <div className=" w-full  bg-cover">
            <img className="w-full object-cover " src={room?.image} alt="" />
            <div className="md:flex-1 px-4">
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">Price:</span>
                  <span className="text-gray-600 ">${room?.price}</span>
                </div>
                <div className="flex ">
                  <span className="font-bold text-gray-700  ">
                    Availability:
                  </span>
                  <span className="text-gray-600 ">
                    {!alreadyBooked ? <p>Available</p> : <p>Unavailable</p>}
                  </span>
                </div>
              </div>
              <div className="flex">
                <p className="text-gray-700 mr-4">Size: {room?.size}</p>
                {room?.specialOffer ? (
                  <p className="text-gray-700">
                    Special Offer :{" "}
                    {room?.specialOffer ? (
                      <span className="text-gray-700">
                        {room?.specialOffer}
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="w-full ">
            <h2 className="text-2xl font-bold text-gray-800 ">
              {room?.room_name}
            </h2>
            <p className="text-gray-600  text-sm mb-4">{room?.description}</p>

            <form onSubmit={handleBookings}>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  required
                  name="name"
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  required
                  name="phone"
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="text"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Your Booking Date
                  </label>
                </div>
                <input
                  required
                  name="date"
                  value={dataChange}
                  onChange={(e) => setDataChange(e.target.value)}
                  min={todayDate}
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  type="date"
                />
              </div>

              <div className="mt-8">
                {!alreadyBooked ? (
                  <button
                    type="submit"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                    className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                  >
                    Book Now
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled
                    className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                  >
                    Booked!! Try another date
                  </button>
                )}
              </div>
            </form>

            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="text-center text-3xl">Room Details</h3>
                <hr />
                <h3 className="font-bold text-lg">{room?.room_name}</h3>
                <p className="py-4">Price per night: ${room?.price}</p>
                <p className="py-4">Room Size: {room?.size}</p>
                {room?.specialOffer ? (
                  <p className="py-4">Special Offer: {room?.specialOffer}</p>
                ) : (
                  ""
                )}
                <h3 className="text-center text-3xl">Personal Details</h3>
                <hr />
                <p className="py-4">Name: {Name}</p>
                <p className="py-4">Email: {user?.email}</p>
                <p className="py-4">Phone: {phone}</p>
                <p className="py-4">Booking Date: {date}</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={handleSubmit} className="btn">
                      Ok
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
