import React from "react";
import { Link } from "react-router-dom";

const RoomImage = ({ data }) => {
  return (
    <div>
      <Link to={`/rooms/${data?._id}`}>
        <div>
          <img className="relative w-full" src={data?.image} alt="" />
          <p className="absolute top-0 left-1 md:text-4xl font-bold bg-[#ffcf00] rounded-full py-2 px-2 bg-opacity-40 ">
            {data?.room_name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RoomImage;
