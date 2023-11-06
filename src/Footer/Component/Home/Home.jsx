import videoBanner from "../../../assets/Roomjet.mp4";
import logo from "../../../assets/RoomJet-2.png";
import Deal from "./Deal";
import Newsletter from "./Newsletter";
import Review from "./Review";
import Rooms from "../Rooms/Rooms";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="max-w-6xl mx-auto">
        <video
          autoPlay="{true}"
          loop
          muted
          className="fixed w-[1150px] -z-10 object-cover "
        >
          <source src={videoBanner} />
        </video>
      </div>

      <div className="flex items-center justify-evenly mx-2 mt-6 md:mx-10 md:mt-16 lg:mx-20 lg:mt-36">
        <div className="flex-1 ">
          <h3 className="text-white font-bold text-lg md:text-3xl lg:text-6xl">
            Discover a World of Luxury and Comfort with RoomJet
          </h3>
          <div className=" lg:mt-8">
            <button className=" text-base font-semibold hover:bg-[#28844b] hover:text-black bg-[#ffcf00]  text-black  py-2 px-4 rounded-md hover:bg-blue-gray-800">
              Book Now
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="mt-40">
        <Deal />
      </div>

      <div className="bg-[#ccb9b1] py-20">
        <div className="text-center w-4/5 mx-auto space-y-4 mb-6">
          <h3 className="text-4xl font-bold">Our feature Rooms</h3>
          <p>
            Experience the pinnacle of luxury with our feature room. Immerse
            yourself in spacious comfort, breathtaking views, and exclusive
            amenities, creating an unforgettable stay for our most discerning
            guests.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-2 my-8">
          {data.slice(6, 12).map((data) => (
            <Rooms key={data.room_name} data={data} />
          ))}
        </div>
      </div>

      <div>
        <Review />
      </div>

      <div className="mt-16">
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
