import { Link } from "react-router-dom";

const Rooms = ({ data }) => {
  console.log(data);

  const { room_name, description, price, availability, image, size } = data;
  return (
    <div>
      

      <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
<div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
        <div className="relative">
          <img className="w-full h-64 object-cover" src={image} alt="Image" />
         
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
            <Link to={`/book/${data?._id}`}>
              <button className=" text-base font-semibold my-4 bg-[#ff5100]  text-white py-2 px-4 rounded-full hover:bg-blue-gray-800">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
</div>


    </div>
  );
};

export default Rooms;
