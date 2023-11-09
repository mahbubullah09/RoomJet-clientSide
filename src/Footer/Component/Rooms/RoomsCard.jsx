import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RoomsCard = ({ data }) => {


 


  const {_id, room_name, description, price, availability, image, size } = data;



  const [reviewed, setReviewed] = useState([]);
  const reviewUrl = `https://roomjet-server-side.vercel.app/review/rooms?room_id=${_id}`;

  useEffect(() => {
    //    axios.get(url, {withCredentials:true})
    //    .then(res => {
    //     setBookings(res.data)
    //    })

    fetch(reviewUrl)
      .then((res) => res.json())
      .then((data) => setReviewed(data));
  }, [reviewUrl]);
  return (
    <div>
      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
        <div className="relative">
          <img className="w-full h-64 object-cover" src={image} alt="Image" />
          
           
            < p className='absolute bottom-1 right-1 md:text-xl font-bold bg-[#ffcf00] rounded-md py-2 px-2 bg-opacity-40 '>{reviewed.length} Review</p>
             
           
       
        </div>
        <div className="p-4">
          <button
            disabled
            className=" text-base font-semibold my-4 bg-[#ffcf00]  text-black  py-2 px-4 rounded-md hover:bg-blue-gray-800"
          >
            {room_name}
          </button>
          <p className="text-gray-700 text-base">{description}</p>
          <div className="flex justify-between items-center mt-2">
            <p>Size: {size}</p>
            <p>Price: {price}</p>
          </div>
          <div className="grid place-items-center">
            <Link to={`/rooms/${_id}`}>
              <button className=" text-base font-semibold my-4 bg-[#ff5100]  text-white py-2 px-4 rounded-full hover:bg-blue-gray-800">
                Details
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;
