import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Bookings = () => {

    const {id} = useParams();
    const [data, setData] = useState([]);
    const [room, SetRoom] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/rooms')
        .then((res) => res.json())
        .then((data) => setData(data));
      const findData = data?.find((data) => data._id == id);
      SetRoom(findData);
    }, [data, id]);
    console.log(room);
    const minDate = moment().format('YYYY-MM-DD');
    console.log(minDate);
  
    return (
        <div>
            
         
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Book Your Room Now</h2>
<div className="py-6 px-6">
    <div className="px-6 flex flex-col md:flex-row gap-4 bg-white rounded-lg shadow-lg overflow-hidden py-10 mx-auto  lg:max-w-6xl">
        <div className=" w-full  bg-cover">
       
            <img className="w-full object-cover " src={room?.image} alt="" />
            <div className="md:flex-1 px-4">
             
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">
                    Price:
                  </span>
                  <span className="text-gray-600 ">
                    ${room?.price}
                  </span>
                </div>
                <div className="flex ">
                  <span className="font-bold text-gray-700  ">
                    Availability:
                  </span>
                  <span className="text-gray-600 ">
                    {room?.availability ? <p>Available</p> : <p>Unavailable</p>}
                  </span>
                </div>
              </div>
              <div className="flex">
                <p className="text-gray-700 mr-4">Size: {room?.size}</p>
              {
                room?.specialOffer ?
                <p className="text-gray-700">Special Offer : {
                    room?.specialOffer ?

                    <span className="text-gray-700">{room?.specialOffer }</span>
                    :
                    ""
                    }</p>
                    :
                    ''
              }
              </div>
              </div>
        </div>
        <div className="w-full ">
            


            
            <h2 className="text-2xl font-bold text-gray-800 ">
                {room?.room_name}
              </h2>
              <p className="text-gray-600  text-sm mb-4">
                {room?.description}
              </p>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Your Booking Date</label>
                    
                </div>
                <input min={minDate} className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="date" />
            </div>
          
            <div className="mt-8">
                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Book Now</button>
            </div>
           
        </div>
    </div>
</div>



        </div>
    );
};

export default Bookings;